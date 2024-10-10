import { inject, injectable } from 'tsyringe'

import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { ICategoriesRepository } from '@/modules/cars/categories/repositories/ICategoriesRepository'
import { AppError } from '@/shared/errors/AppError'
import { HttpStatusCode } from '@/shared/errors/HttpStatusCode'

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
      throw new AppError('Category already exists', HttpStatusCode.BAD_REQUEST)
    }

    this.categoriesRepository.create({ name, description })
  }
}
