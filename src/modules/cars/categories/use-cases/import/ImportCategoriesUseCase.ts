import fs from 'node:fs'

import { parse } from 'csv-parse'

import { ICategoriesRepository } from '@/modules/cars/categories/repositories/ICategoriesRepository'

type ImportCategory = {
  name: string
  description: string
}

export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<ImportCategory[]> {
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
          resolve(categories)
        })
        .on('error', (error) => {
          reject(error)
        })
    })
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file)

    categories.forEach(async (category) => {
      const { name, description } = category

      const categoryAlreadyExists = this.categoriesRepository.findByName(name)
      if (!categoryAlreadyExists) {
        this.categoriesRepository.create({ name, description })
      }
    })
  }
}
