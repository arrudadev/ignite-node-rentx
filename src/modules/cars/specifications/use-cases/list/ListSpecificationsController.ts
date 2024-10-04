import { Request, Response } from 'express'

import { SpecificationRepository } from '@/modules/cars/specifications/repositories/SpecificationRepository'

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

export class ListSpecificationsController {
  static handle(request: Request, response: Response) {
    const specificationsRepository = SpecificationRepository.getInstance()
    const listSpecificationsUseCase = new ListSpecificationsUseCase(
      specificationsRepository,
    )

    const specifications = listSpecificationsUseCase.execute()

    response.json(specifications)
  }
}
