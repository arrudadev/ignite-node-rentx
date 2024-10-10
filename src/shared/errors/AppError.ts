import { HttpStatusCode } from './HttpStatusCode'

export class AppError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode: HttpStatusCode) {
    this.message = message
    this.statusCode = statusCode
  }
}
