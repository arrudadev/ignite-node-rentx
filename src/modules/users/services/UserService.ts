import { hash } from 'bcrypt'

import { AppError } from '@/shared/errors/AppError'
import { HttpStatusCode } from '@/shared/errors/HttpStatusCode'

import { CreateUserDTO } from '../dtos/UserDTO'
import { UserRepository } from '../repositories/UserRepository'

export interface IUserService {
  create(createUserDTO: CreateUserDTO): Promise<void>
}

export class UserService implements IUserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDTO: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(
      createUserDTO.email,
    )

    if (userAlreadyExists) {
      throw new AppError('User already exists', HttpStatusCode.BAD_REQUEST)
    }

    const user = {
      ...createUserDTO,
      password: await hash(createUserDTO.password, 8),
    }

    await this.userRepository.create(user)
  }
}
