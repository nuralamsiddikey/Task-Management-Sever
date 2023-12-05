"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueCode = void 0;
const uuid_1 = require("uuid");
function generateUniqueCode() {
    const uuid = (0, uuid_1.v4)();
    const shortCode = uuid.replace(/-/g, '').substr(0, 7);
    return shortCode;
}
exports.generateUniqueCode = generateUniqueCode;
