import { Request, Response } from 'express'

import { AuthService } from '../services/AuthService'

export class AuthController {
  constructor(private authService: AuthService) {}

  async login(request: Request, response: Response) {
    const { email, password } = request.body

    const { token } = await this.authService.login(email, password)

    return response.json({ token })
  }
}
