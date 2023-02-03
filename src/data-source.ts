import 'reflect-metadata';
import {  DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: config.database.type,
    host: config.database.host,
    username: config.database.user,
    password: config.database.password,
    database: config.database.dbName,
    port: config.database.port,
    synchronize: process.env.NODE_ENV !== 'production',
    entities:[
        "src/entities/**/*.entity.ts"
    ],
    logging: process.env.NODE_ENV !== 'production'? ['query']: ['error'],
    migrations: ["migration/*.ts"],
  })