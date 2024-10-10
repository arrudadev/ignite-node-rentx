import { Router } from 'express'

import { SpecificationController } from '../controllers/SpecificationController'
import { SpecificationRepository } from '../repositories/SpecificationRepository'
import { SpecificationService } from '../services/SpecificationService'

const specificationsRoutes = Router()

const specificationRepository = new SpecificationRepository()
const specificationService = new SpecificationService(specificationRepository)
const specificationController = new SpecificationController(
  specificationService,
)

specificationsRoutes.get('/specifications', (request, response) =>
  specificationController.list(request, response),
)
specificationsRoutes.post('/specifications', (request, response) =>
  specificationController.create(request, response),
)

export { specificationsRoutes }
