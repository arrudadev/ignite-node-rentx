import { Request, Response } from 'express'

import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  static handle(request: Request, response: Response) {
    const { name, description } = request.body

    const categoriesRepository = new CategoriesRepository()
    const createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepository,
    )

    createCategoryUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
