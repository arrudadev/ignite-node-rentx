import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { Category } from '@/modules/cars/categories/models/Category'

export interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): void
  list(): Category[]
  findByName(name: string): Category | undefined
}
