import { DataSource } from "typeorm"
import { Client } from "./model/client.model"
import { Task } from "./model/task.model"
import { Comment } from "./model/comment.model"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "task",
    synchronize: true,
    logging: false,
    entities: [Client,Task,Comment],
    subscribers: [],
    migrations: [],
})  