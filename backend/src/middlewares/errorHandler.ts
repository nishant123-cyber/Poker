import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

export interface AppError extends Error {
  status?: number;
  code?: string;
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = err.status || 500;
  const code = err.code || 'INTERNAL_SERVER_ERROR';
  const message = err.message || 'An unexpected error occurred';

  logger.error(`[${code}] ${message}`, err);

  res.status(status).json({
    error: {
      code,
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
}

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const error: AppError = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  error.code = 'NOT_FOUND';
  next(error);
}

export function validationErrorHandler(error: any): AppError {
  const appError: AppError = new Error(error.details?.[0]?.message || 'Validation failed');
  appError.status = 400;
  appError.code = 'VALIDATION_ERROR';
  return appError;
}
