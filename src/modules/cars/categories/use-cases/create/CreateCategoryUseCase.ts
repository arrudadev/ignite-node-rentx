import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { ICategoriesRepository } from '@/modules/cars/categories/repositories/ICategoriesRepository'

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: CreateCategoryDTO) {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
