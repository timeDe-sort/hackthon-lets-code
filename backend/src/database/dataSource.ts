import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'hackathontimedesort',
    migrations: ['src/database/migrations/*.ts'],
})

export default AppDataSource;
