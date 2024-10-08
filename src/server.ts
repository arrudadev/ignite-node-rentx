import 'reflect-metadata'

import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { dataSource } from './database'
import { router } from './routes'
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

app.listen(3333, () => {
  console.log('Server is running on http://localhost:3333')
})
