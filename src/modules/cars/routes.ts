import { Router } from 'express'

import { specificationsRoutes } from './specifications/routes'
import { categoriesRoutes } from './submodules/categories/routes/CategoryRoutes'

const carsRoutes = Router()

carsRoutes.use('/cars', categoriesRoutes)
carsRoutes.use('/cars', specificationsRoutes)

export { carsRoutes }
