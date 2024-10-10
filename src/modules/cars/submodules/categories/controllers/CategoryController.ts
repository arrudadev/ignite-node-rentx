import { Request, Response } from 'express'

import { CategoryService } from '../services/CategoryService'

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  async create(request: Request, response: Response) {
    const { name, description } = request.body

    await this.categoryService.create({ name, description })

    return response.status(201).send()
  }

  async list(request: Request, response: Response) {
    const categories = await this.categoryService.list()

    return response.json(categories)
  }

  async import(request: Request, response: Response) {
    const { file } = request

    if (file) {
      await this.categoryService.import(file)
    }

    return response.send()
  }
}
