import { Router } from 'express'

import { categoriesRoutes } from './submodules/categories/routes/categoryRoutes'
import { specificationsRoutes } from './submodules/specifications/routes/specificationRoutes'

const carsRoutes = Router()

carsRoutes.use('/cars', categoriesRoutes)
carsRoutes.use('/cars', specificationsRoutes)

export { carsRoutes }
