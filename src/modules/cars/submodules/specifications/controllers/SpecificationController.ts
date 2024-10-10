import { Request, Response } from 'express'

import { SpecificationService } from '../services/SpecificationService'

export class SpecificationController {
  constructor(private specificationService: SpecificationService) {}

  async create(request: Request, response: Response) {
    const { name, description } = request.body

    await this.specificationService.create({ name, description })

    return response.status(201).send()
  }

  async list(request: Request, response: Response) {
    const specifications = await this.specificationService.list()

    return response.json(specifications)
  }
}
