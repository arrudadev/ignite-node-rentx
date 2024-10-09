import { Repository } from 'typeorm'

import { dataSource } from '@/database'
import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { Specification } from '@/modules/cars/specifications/entities/Specification'

import { ISpecificationRepository } from './ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
  private async getRepository(): Promise<Repository<Specification>> {
    return dataSource.getRepository(Specification)
  }

  async create({ name, description }: CreateCategoryDTO) {
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
