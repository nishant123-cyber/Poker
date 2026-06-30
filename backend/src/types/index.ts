export interface IUser {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
  chipsBalance: number;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
  isActive: boolean;
}

export interface ITokenPayload {
  userId: string;
  email: string;
  username: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: Omit<IUser, 'passwordHash'>;
}

export enum GameStatus {
  WAITING = 'WAITING',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
}

export enum ActionType {
  FOLD = 'FOLD',
  CHECK = 'CHECK',
  CALL = 'CALL',
  BET = 'BET',
  RAISE = 'RAISE',
  ALL_IN = 'ALL_IN',
}

export interface ICard {
  suit: 'H' | 'D' | 'C' | 'S';
  rank: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K';
}

export interface ITableConfig {
  tableId: string;
  name: string;
  maxPlayers: number;
  smallBlind: number;
  bigBlind: number;
  buyInMin: number;
  buyInMax: number;
  isPrivate: boolean;
  createdBy: string;
}
