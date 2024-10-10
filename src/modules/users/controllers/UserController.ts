import { Request, Response } from 'express'

import { IUserService } from '../services/UserService'

export class UserController {
  constructor(private userService: IUserService) {}

  async create(request: Request, response: Response) {
    const { name, email, password, driverLicense } = request.body

    await this.userService.create({ name, email, password, driverLicense })

    return response.status(201).send()
  }
}
