import { ISpecificationRepository } from '@/modules/cars/specifications/repositories/ISpecificationRepository'

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute() {
    return this.specificationsRepository.list()
  }
}
