import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from './use-cases/create'
import { importCategoriesController } from './use-cases/import'
import { ListCategoriesController } from './use-cases/list'

const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp',
})

categoriesRoutes.get('/categories', ListCategoriesController.handle)
categoriesRoutes.post('/categories', CreateCategoryController.handle)
categoriesRoutes.post(
  '/categories/import',
  upload.single('file'),
  (request, response) => importCategoriesController.handle(request, response),
)

export { categoriesRoutes }
