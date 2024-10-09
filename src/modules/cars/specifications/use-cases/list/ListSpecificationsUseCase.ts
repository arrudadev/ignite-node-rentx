import { inject, injectable } from 'tsyringe'

import { ISpecificationRepository } from '@/modules/cars/specifications/repositories/ISpecificationRepository'

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationRepository,
  ) {}

  async execute() {
    return this.specificationsRepository.list()
  }
}
