import { getPrismaClient } from '../db/prisma';
import { hashPassword, comparePasswords } from '../utils/password';
import { generateAccessToken, generateRefreshToken, TokenPayload } from '../utils/jwt';

interface RegisterInput {
  email: string;
  username: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    userId: string;
    email: string;
    username: string;
  };
}

export class AuthService {
  private prisma = getPrismaClient();

  async register(input: RegisterInput): Promise<AuthResponse> {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: input.email }, { username: input.username }],
      },
    });

    if (existingUser) {
      const field = existingUser.email === input.email ? 'email' : 'username';
      throw new Error(`User with this ${field} already exists`);
    }

    const hashedPassword = await hashPassword(input.password);

    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        username: input.username,
        password: hashedPassword,
        stats: {
          create: {
            gamesPlayed: 0,
            gamesWon: 0,
            totalChipsWon: 0,
            totalChipsLost: 0,
            winRate: 0,
          },
        },
      },
    });

    const payload: TokenPayload = {
      userId: user.id,
      email: user.email,
      username: user.username,
    };

    return {
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload),
      user: {
        userId: user.id,
        email: user.email,
        username: user.username,
      },
    };
  }

  async login(input: LoginInput): Promise<AuthResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const passwordMatch = await comparePasswords(input.password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid email or password');
    }

    const payload: TokenPayload = {
      userId: user.id,
      email: user.email,
      username: user.username,
    };

    return {
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload),
      user: {
        userId: user.id,
        email: user.email,
        username: user.username,
      },
    };
  }

  async refreshAccessToken(refreshToken: string): Promise<{ accessToken: string }> {
    try {
      const { verifyRefreshToken } = require('../utils/jwt');
      const payload = verifyRefreshToken(refreshToken);

      const newAccessToken = generateAccessToken(payload);

      return { accessToken: newAccessToken };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  async getUserById(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        stats: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async updateProfile(userId: string, data: { username?: string; email?: string }) {
    if (data.email) {
      const existingEmail = await this.prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existingEmail && existingEmail.id !== userId) {
        throw new Error('Email already in use');
      }
    }

    if (data.username) {
      const existingUsername = await this.prisma.user.findUnique({
        where: { username: data.username },
      });
      if (existingUsername && existingUsername.id !== userId) {
        throw new Error('Username already in use');
      }
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    return updatedUser;
  }
}

export default new AuthService();
