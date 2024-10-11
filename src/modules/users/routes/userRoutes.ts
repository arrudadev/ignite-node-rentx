import { Router } from 'express'

import { UserController } from '../controllers/UserController'
import { UserRepository } from '../repositories/UserRepository'
import { UserService } from '../services/UserService'

const userRoutes = Router()

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

userRoutes.post('/users', (request, response) =>
  userController.create(request, response),
)

export { userRoutes }
