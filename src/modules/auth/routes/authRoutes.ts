import { Router } from 'express'

import { UserRepository } from '@/modules/users/repositories/UserRepository'
import { UserService } from '@/modules/users/services/UserService'

import { AuthController } from '../controllers/AuthController'
import { AuthService } from '../services/AuthService'

const authRoutes = Router()

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const authService = new AuthService(userService)
const authController = new AuthController(authService)

authRoutes.post('/auth/login', (request, response) =>
  authController.login(request, response),
)

export { authRoutes }
