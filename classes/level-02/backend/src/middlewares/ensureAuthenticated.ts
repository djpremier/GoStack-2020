import { verify } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import authConfig from '../config/auth';

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
    throw new Error('JWT token is missing');
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
    throw new Error('Invalid JWT token');
  }

  return next();
}
