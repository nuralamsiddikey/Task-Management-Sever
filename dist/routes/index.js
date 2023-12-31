"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_route_1 = __importDefault(require("./client.route"));
const task_route_1 = __importDefault(require("./task.route"));
router.use('/client', client_route_1.default);
router.use('/task', task_route_1.default);
exports.default = router;
