import { Router } from 'express'

import { carsRoutes } from './modules/cars/routes'
import { userRoutes } from './modules/users/routes/UserRoutes'

const router = Router()

router.use(carsRoutes)
router.use(userRoutes)

export { router }
