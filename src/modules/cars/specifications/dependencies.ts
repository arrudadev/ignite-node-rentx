import { container } from 'tsyringe'

import { ISpecificationRepository } from './repositories/ISpecificationRepository'
import { SpecificationRepository } from './repositories/SpecificationRepository'

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
)
