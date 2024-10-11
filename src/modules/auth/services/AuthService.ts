import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { UserService } from '@/modules/users/services/UserService'
import { AppError } from '@/shared/errors/AppError'
import { HttpStatusCode } from '@/shared/errors/HttpStatusCode'

export class AuthService {
  constructor(private userService: UserService) {}

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email)
    if (!user) {
      throw new AppError(
        'Email or password are incorrect',
        HttpStatusCode.BAD_REQUEST,
      )
    }

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new AppError(
        'Email or password are incorrect',
        HttpStatusCode.BAD_REQUEST,
      )
    }

    const token = sign({}, 'secret', {
      subject: user.id,
      expiresIn: '1d',
    })

    return { token }
  }
}
