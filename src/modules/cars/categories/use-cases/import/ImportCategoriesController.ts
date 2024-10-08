import { Request, Response } from 'express'

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase'

export class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    const { file } = request

    if (file) {
      await this.importCategoriesUseCase.execute(file)
    }

    return response.send()
  }
}
