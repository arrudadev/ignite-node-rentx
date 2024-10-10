import { Router } from 'express'

import { categoriesRoutes } from './submodules/categories/routes/CategoryRoutes'
import { specificationsRoutes } from './submodules/specifications/routes/SpecificationRoutes'

const carsRoutes = Router()

carsRoutes.use('/cars', categoriesRoutes)
carsRoutes.use('/cars', specificationsRoutes)

export { carsRoutes }
