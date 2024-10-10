import { Repository } from 'typeorm'

import { dataSource } from '@/database'

import { CreateUserDTO } from '../dtos/UserDTO'
import { User } from '../entities/User'

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
}

export class UserRepository {
  private async getRepository(): Promise<Repository<User>> {
    return dataSource.getRepository(User)
  }

  async create({
    name,
    email,
    password,
    driverLicense,
  }: CreateUserDTO): Promise<void> {
    const repository = await this.getRepository()

    const user = repository.create({
      name,
      email,
      password,
      driverLicense,
    })

    repository.save(user)
  }

  async findByEmail(email: string): Promise<User | null> {
    const repository = await this.getRepository()

    const user = repository.findOne({
      where: { email },
    })

    return user
  }

  async findById(id: string): Promise<User | null> {
    const repository = await this.getRepository()

    const user = repository.findOne({
      where: { id },
    })

    return user
  }
}
