import { CreateCategoryDTO } from '@/dto/CreateCategoryDTO'
import { Category } from '@/models/Category'

import { ICategoriesRepository } from './ICategoriesRepository'

export class CategoriesRepository implements ICategoriesRepository {
  categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ name, description }: CreateCategoryDTO) {
    const category = new Category(name, description)
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name)
  }
}
