import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { Specification } from '@/modules/cars/specifications/models/Specification'

import { ISpecificationRepository } from './ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
  specifications: Specification[]

  private static INSTANCE: SpecificationRepository

  private constructor() {
    this.specifications = []
  }

  static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository()
    }

    return SpecificationRepository.INSTANCE
  }

  create({ name, description }: CreateCategoryDTO) {
    const specification = new Specification(name, description)
    this.specifications.push(specification)
  }

  list(): Specification[] {
    return this.specifications
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find((category) => category.name === name)
  }
}
