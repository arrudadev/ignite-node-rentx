import { container } from 'tsyringe'

import { CategoriesRepository } from './repositories/CategoriesRepository'
import { ICategoriesRepository } from './repositories/ICategoriesRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)
