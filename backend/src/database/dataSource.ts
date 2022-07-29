import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'hackathon',
    password: 'hackathon',
    database: 'hackathon',
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/entities/*.ts']
})

export default AppDataSource;
