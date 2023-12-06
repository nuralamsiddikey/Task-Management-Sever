"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAuthenticate = void 0;
const IsAuthenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            return res.status(401).json({
                message: "Access forbidden",
                error: true,
            });
        const token = authHeader.split(" ")[1];
    }
    catch (error) { }
};
exports.IsAuthenticate = IsAuthenticate;
