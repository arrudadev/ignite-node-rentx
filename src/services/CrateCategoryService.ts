import { CreateCategoryDTO } from '@/dto/CreateCategoryDTO'
import { ICategoriesRepository } from '@/repositories/ICategoriesRepository'

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: CreateCategoryDTO) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
