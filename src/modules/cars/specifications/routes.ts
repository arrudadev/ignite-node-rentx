import { Router } from 'express'

import { CreateSpecificationController } from './use-cases/create'
import { ListSpecificationsController } from './use-cases/list'

const specificationsRoutes = Router()

specificationsRoutes.get('/specifications', ListSpecificationsController.handle)
specificationsRoutes.post(
  '/specifications',
  CreateSpecificationController.handle,
)

export { specificationsRoutes }
