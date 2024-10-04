import { CreateCategoryDTO } from '@/modules/cars/categories/dtos/CreateCategoryDTO'
import { ISpecificationRepository } from '@/modules/cars/specifications/repositories/ISpecificationRepository'

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: CreateCategoryDTO) {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    this.specificationRepository.create({ name, description })
  }
}
