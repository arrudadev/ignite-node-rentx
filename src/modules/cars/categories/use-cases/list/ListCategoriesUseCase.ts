import { ICategoriesRepository } from '@/modules/cars/categories/repositories/ICategoriesRepository'

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute() {
    return this.categoriesRepository.list()
  }
}
