import { inject, injectable } from 'tsyringe'

import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { ISpecificationRepository } from '@/modules/cars/specifications/repositories/ISpecificationRepository'

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}

  async execute({ name, description }: CreateCategoryDTO) {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    await this.specificationRepository.create({ name, description })
  }
}
