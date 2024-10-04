import { Router } from 'express'

import { CreateCategoryController } from './use-cases/create'
import { ListCategoriesController } from './use-cases/list'

const categoriesRoutes = Router()

categoriesRoutes.get('/categories', ListCategoriesController.handle)
categoriesRoutes.post('/categories', CreateCategoryController.handle)

export { categoriesRoutes }
