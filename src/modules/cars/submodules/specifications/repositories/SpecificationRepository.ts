import { Repository } from 'typeorm'

import { dataSource } from '@/database'

import { CreateSpecificationDTO } from '../dtos/SpecificationDTO'
import { Specification } from '../entities/Specification'

export class SpecificationRepository {
  private async getRepository(): Promise<Repository<Specification>> {
    return dataSource.getRepository(Specification)
  }

  async create({ name, description }: CreateSpecificationDTO) {
    const repository = await this.getRepository()

    const specification = repository.create({ name, description })

    repository.save(specification)
  }

  async list(): Promise<Specification[]> {
    const repository = await this.getRepository()

    const specifications = repository.find()

    return specifications
  }

  async findByName(name: string): Promise<Specification | null> {
    const repository = await this.getRepository()

    const specification = repository.findOne({ where: { name } })

    return specification
  }
}
