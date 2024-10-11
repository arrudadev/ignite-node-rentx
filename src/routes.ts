import { Router } from 'express'

import { authRoutes } from './modules/auth/routes/authRoutes'
import { carsRoutes } from './modules/cars/routes'
import { userRoutes } from './modules/users/routes/userRoutes'

const router = Router()

router.use(authRoutes)
router.use(carsRoutes)
router.use(userRoutes)

export { router }
