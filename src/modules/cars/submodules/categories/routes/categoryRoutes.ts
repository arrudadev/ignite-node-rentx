import { Router } from 'express'
import multer from 'multer'

import { isAuthenticated } from '@/modules/auth/middlewares/isAuthenticated'

import { CategoryController } from '../controllers/CategoryController'
import { CategoryRepository } from '../repositories/CategoryRepository'
import { CategoryService } from '../services/CategoryService'

const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp',
})

const categoryRepository = new CategoryRepository()
const categoryService = new CategoryService(categoryRepository)
const categoryController = new CategoryController(categoryService)

categoriesRoutes.get('/categories', isAuthenticated, (request, response) =>
  categoryController.list(request, response),
)
categoriesRoutes.post('/categories', isAuthenticated, (request, response) =>
  categoryController.create(request, response),
)
categoriesRoutes.post(
  '/categories/import',
  isAuthenticated,
  upload.single('file'),
  (request, response) => categoryController.import(request, response),
)

export { categoriesRoutes }
