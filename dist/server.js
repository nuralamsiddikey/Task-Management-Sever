"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uploadPath = path_1.default.join(__dirname, "..", "uploads");
if (!fs_1.default.existsSync(uploadPath)) {
    fs_1.default.mkdirSync(uploadPath);
}
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
// IMPORT ROUTES
const index_1 = __importDefault(require("./routes/index"));
app.use('/api', index_1.default);
db_1.AppDataSource.initialize()
    .then(() => console.log("DBConnection success"))
    .catch((error) => console.log("DBConnection failed", error));
app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
