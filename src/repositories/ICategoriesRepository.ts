import { CreateCategoryDTO } from '@/dto/CreateCategoryDTO'
import { Category } from '@/models/Category'

export interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): void
  list(): Category[]
  findByName(name: string): Category | undefined
}
