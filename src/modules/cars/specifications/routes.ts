import { Router } from 'express'

import { CreateSpecificationController } from './use-cases/create/CreateSpecificationController'
import { ListSpecificationsController } from './use-cases/list/ListSpecificationsController'

const specificationsRoutes = Router()

specificationsRoutes.get('/specifications', ListSpecificationsController.handle)
specificationsRoutes.post(
  '/specifications',
  CreateSpecificationController.handle,
)

export { specificationsRoutes }
