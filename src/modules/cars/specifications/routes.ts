import { Router } from 'express'

import { createSpecificationController } from './use-cases/create'
import { listSpecificationsController } from './use-cases/list'

const specificationsRoutes = Router()

specificationsRoutes.get('/specifications', (request, response) =>
  listSpecificationsController.handle(request, response),
)

specificationsRoutes.post('/specifications', (request, response) =>
  createSpecificationController.handle(request, response),
)

export { specificationsRoutes }
