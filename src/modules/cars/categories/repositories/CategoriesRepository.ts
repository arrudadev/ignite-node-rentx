import { Repository } from 'typeorm'

import { dataSource } from '@/database'
import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { Category } from '@/modules/cars/categories/entities/Category'

import { ICategoriesRepository } from './ICategoriesRepository'

export class CategoriesRepository implements ICategoriesRepository {
  private async getRepository(): Promise<Repository<Category>> {
    return dataSource.getRepository(Category)
  }

  async create({ name, description }: CreateCategoryDTO): Promise<void> {
    const repository = await this.getRepository()

    const category = repository.create({
      name,
      description,
    })

    repository.save(category)
  }

  async list(): Promise<Category[]> {
    const repository = await this.getRepository()

    return repository.find()
  }

  async findByName(name: string): Promise<Category | null> {
    const repository = await this.getRepository()

    const category = repository.findOne({
      where: { name },
    })

    return category
  }
}
