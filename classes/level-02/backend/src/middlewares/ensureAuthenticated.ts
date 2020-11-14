import { verify } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError('JWT token is missing');
  }

  const [, token] = authorization.split(' ');

  const { secret } = authConfig.jwt;
  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }

  return next();
}
