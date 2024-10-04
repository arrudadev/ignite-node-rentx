import { Router } from 'express'

import { carsRoutes } from './modules/cars/routes'

const router = Router()

router.use(carsRoutes)

export { router }
