import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rentx',
  password: 'rentx',
  database: 'rentx',
  migrations: ['src/database/migrations/*.ts'],
})
