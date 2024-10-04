import { Router } from 'express'

import { categoriesRoutes } from './categories/routes'

const carsRoutes = Router()

carsRoutes.use('/cars', categoriesRoutes)

export { carsRoutes }
