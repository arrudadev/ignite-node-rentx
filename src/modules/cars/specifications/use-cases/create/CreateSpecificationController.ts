import { Request, Response } from 'express'

import { SpecificationRepository } from '@/modules/cars/specifications/repositories/SpecificationRepository'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export class CreateSpecificationController {
  static handle(request: Request, response: Response) {
    const { name, description } = request.body

    const specificationRepository = SpecificationRepository.getInstance()
    const createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationRepository,
    )

    createSpecificationUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
