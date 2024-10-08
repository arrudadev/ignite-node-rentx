import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { Category } from '@/modules/cars/categories/entities/Category'

export interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): Promise<void>
  list(): Promise<Category[]>
  findByName(name: string): Promise<Category | null>
}
