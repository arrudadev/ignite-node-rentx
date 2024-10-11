import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { AppError } from '@/shared/errors/AppError'
import { HttpStatusCode } from '@/shared/errors/HttpStatusCode'

export async function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { authorization } = request.headers
  if (!authorization) {
    throw new AppError('Unauthorized', HttpStatusCode.UNAUTHORIZED)
  }

  const [, token] = authorization.split(' ')

  try {
    const { sub: userId } = verify(token, 'secret')

    request.user = {
      id: userId as string,
    }

    next()
  } catch {
    throw new AppError('Unauthorized', HttpStatusCode.UNAUTHORIZED)
  }
}
