import fs from 'node:fs'

import { parse } from 'csv-parse'

import { AppError } from '@/shared/errors/AppError'
import { HttpStatusCode } from '@/shared/errors/HttpStatusCode'

import { CreateCategoryDTO } from '../dtos/CategoryDTO'
import { CategoryRepository } from '../repositories/CategoryRepository'

type ImportCategory = {
  name: string
  description: string
}

export class CategoryService {
  constructor(private categoriesRepository: CategoryRepository) {}

  async create({ name, description }: CreateCategoryDTO) {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      throw new AppError('Category already exists', HttpStatusCode.BAD_REQUEST)
    }

    this.categoriesRepository.create({ name, description })
  }

  async list() {
    return this.categoriesRepository.list()
  }

  private loadCategories(file: Express.Multer.File): Promise<ImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const parser = parse()
      const categories: ImportCategory[] = []

      stream.pipe(parser)

      parser
        .on('data', async (line) => {
          const [name, description] = line
          categories.push({ name, description })
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (error) => {
          reject(error)
        })
    })
  }

  async import(file: Express.Multer.File) {
    const categories = await this.loadCategories(file)

    categories.forEach(async (category) => {
      const { name, description } = category

      const categoryAlreadyExists =
        await this.categoriesRepository.findByName(name)
      if (!categoryAlreadyExists) {
        await this.categoriesRepository.create({ name, description })
      }
    })
  }
}
