import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from './use-cases/create/CreateCategoryController'
import { ImportCategoriesController } from './use-cases/import/ImportCategoriesController'
import { ListCategoriesController } from './use-cases/list/ListCategoriesController'

const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp',
})

categoriesRoutes.get('/categories', ListCategoriesController.handle)
categoriesRoutes.post('/categories', CreateCategoryController.handle)
categoriesRoutes.post(
  '/categories/import',
  upload.single('file'),
  ImportCategoriesController.handle,
)

export { categoriesRoutes }
