import { Category } from '@/models/Category'

export type CreateCategoryDTO = {
  name: string
  description: string
}

export class CategoriesRepository {
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
