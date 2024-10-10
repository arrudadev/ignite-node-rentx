import { AppError } from '@/shared/errors/AppError'
import { HttpStatusCode } from '@/shared/errors/HttpStatusCode'

import { CreateSpecificationDTO } from '../dtos/SpecificationDTO'
import { SpecificationRepository } from '../repositories/SpecificationRepository'

export class SpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}

  async create({ name, description }: CreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new AppError(
        'Specification already exists',
        HttpStatusCode.BAD_REQUEST,
      )
    }

    await this.specificationRepository.create({ name, description })
  }

  async list() {
    return this.specificationRepository.list()
  }
}
