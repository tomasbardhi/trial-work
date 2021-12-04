"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jwt = require("jsonwebtoken");
router.post("/login", (req, res) => {
    const user = {
        username: "Tomas"
    };
    const accessToken = jwt.sign(user, "key");
    res.json({ accessToken });
});
exports.default = router;
