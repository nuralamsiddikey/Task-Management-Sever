"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClient = void 0;
const generate_client_code_1 = require("../../lib/generate_client_code");
const db_1 = require("../../db");
const client_model_1 = require("../../model/client.model");
const addClient = async (req, res) => {
    try {
        const obj = Object.assign(Object.assign({}, req.body), { client_code: (0, generate_client_code_1.generateUniqueCode)() });
        await db_1.AppDataSource.manager.save(client_model_1.Client, obj);
        res.json({
            message: "Client created successfully",
            error: false,
        });
    }
    catch (error) { }
};
exports.addClient = addClient;
