import { Request, Response } from 'express'

import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
  static handle(request: Request, response: Response) {
    const categoriesRepository = CategoriesRepository.getInstance()
    const listCategoriesUseCase = new ListCategoriesUseCase(
      categoriesRepository,
    )

    const categories = listCategoriesUseCase.execute()

    response.json(categories)
  }
}
