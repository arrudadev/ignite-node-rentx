import { Router } from 'express'

import { createSpecificationController } from './use-cases/create'
import { ListSpecificationsController } from './use-cases/list'

const specificationsRoutes = Router()

specificationsRoutes.get('/specifications', ListSpecificationsController.handle)

specificationsRoutes.post('/specifications', (request, response) =>
  createSpecificationController.handle(request, response),
)

export { specificationsRoutes }
