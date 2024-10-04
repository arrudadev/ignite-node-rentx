import { CreateSpecificationDTO } from '../dtos/CreateSpecificationDTO'
import { Specification } from '../models/Specification'

export interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): void
  list(): Specification[]
  findByName(name: string): Specification | undefined
}
