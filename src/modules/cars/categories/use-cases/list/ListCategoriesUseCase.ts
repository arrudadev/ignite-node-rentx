import { inject, injectable } from 'tsyringe'

import { ICategoriesRepository } from '@/modules/cars/categories/repositories/ICategoriesRepository'

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute() {
    return this.categoriesRepository.list()
  }
}
