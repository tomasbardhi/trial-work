"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jwt.verify(token, "key", (err, user) => {
        if (err) {
            return res.send({
                status: "error",
                message: "Could not verify token",
            });
        }
        req.user = user;
        next();
    });
}
exports.default = verifyToken;
