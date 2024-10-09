import { inject, injectable } from 'tsyringe'

import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { ICategoriesRepository } from '@/modules/cars/categories/repositories/ICategoriesRepository'

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: CreateCategoryDTO) {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
