"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.deleteTaskById = exports.updateTaskById = exports.getAllTask = exports.addTask = void 0;
const delete_controller_1 = require("./delete.controller");
Object.defineProperty(exports, "deleteTaskById", { enumerable: true, get: function () { return delete_controller_1.deleteTaskById; } });
const get_controller_1 = require("./get.controller");
Object.defineProperty(exports, "getAllTask", { enumerable: true, get: function () { return get_controller_1.getAllTask; } });
Object.defineProperty(exports, "getTaskById", { enumerable: true, get: function () { return get_controller_1.getTaskById; } });
const post_controller_1 = require("./post.controller");
Object.defineProperty(exports, "addTask", { enumerable: true, get: function () { return post_controller_1.addTask; } });
const put_controller_1 = require("./put.controller");
Object.defineProperty(exports, "updateTaskById", { enumerable: true, get: function () { return put_controller_1.updateTaskById; } });