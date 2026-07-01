import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import authService from '../services/authService';
import { validationErrorHandler } from '../middlewares/errorHandler';
import { registerSchema, loginSchema, refreshTokenSchema, updateProfileSchema } from '../validators/authValidator';

export class AuthController {
  async register(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { error, value } = registerSchema.validate(req.body);
      if (error) {
        throw validationErrorHandler(error);
      }

      const result = await authService.register(value);

      res.status(201).json({
        data: result,
        message: 'User registered successfully',
      });
    } catch (error: any) {
      res.status(error.status || 400).json({
        error: {
          code: error.code || 'REGISTRATION_FAILED',
          message: error.message,
        },
      });
    }
  }

  async login(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { error, value } = loginSchema.validate(req.body);
      if (error) {
        throw validationErrorHandler(error);
      }

      const result = await authService.login(value);

      res.status(200).json({
        data: result,
        message: 'Login successful',
      });
    } catch (error: any) {
      res.status(error.status || 401).json({
        error: {
          code: error.code || 'LOGIN_FAILED',
          message: error.message,
        },
      });
    }
  }

  async refreshToken(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { error, value } = refreshTokenSchema.validate(req.body);
      if (error) {
        throw validationErrorHandler(error);
      }

      const result = await authService.refreshAccessToken(value.refreshToken);

      res.status(200).json({
        data: result,
        message: 'Token refreshed successfully',
      });
    } catch (error: any) {
      res.status(401).json({
        error: {
          code: error.code || 'TOKEN_REFRESH_FAILED',
          message: error.message,
        },
      });
    }
  }

  async getProfile(req: AuthRequest, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({
          error: {
            code: 'UNAUTHORIZED',
            message: 'User not authenticated',
          },
        });
        return;
      }

      const user = await authService.getUserById(req.user.userId);

      res.status(200).json({
        data: user,
        message: 'Profile retrieved successfully',
      });
    } catch (error: any) {
      res.status(error.status || 500).json({
        error: {
          code: error.code || 'PROFILE_FETCH_FAILED',
          message: error.message,
        },
      });
    }
  }

  async updateProfile(req: AuthRequest, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({
          error: {
            code: 'UNAUTHORIZED',
            message: 'User not authenticated',
          },
        });
        return;
      }

      const { error, value } = updateProfileSchema.validate(req.body);
      if (error) {
        throw validationErrorHandler(error);
      }

      const user = await authService.updateProfile(req.user.userId, value);

      res.status(200).json({
        data: user,
        message: 'Profile updated successfully',
      });
    } catch (error: any) {
      res.status(error.status || 400).json({
        error: {
          code: error.code || 'PROFILE_UPDATE_FAILED',
          message: error.message,
        },
      });
    }
  }
}

export default new AuthController();
