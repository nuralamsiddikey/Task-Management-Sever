"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const client_model_1 = require("./model/client.model");
const task_model_1 = require("./model/task.model");
const comment_model_1 = require("./model/comment.model");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "task",
    synchronize: true,
    logging: false,
    entities: [client_model_1.Client, task_model_1.Task, comment_model_1.Comment],
    subscribers: [],
    migrations: [],
});
