import 'reflect-metadata'
import '@/dependencies'
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'

import { dataSource } from './database'
import { router } from './routes'
import { AppError } from './shared/errors/AppError'
import { HttpStatusCode } from './shared/errors/HttpStatusCode'
import swaggerConfig from './swagger.json'

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      response.status(err.statusCode).json({
        message: err.message,
      })
    } else {
      response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
      })
    }

    next(err)
  },
)

app.listen(3333, () => {
  console.log('Server is running on http://localhost:3333')
})
