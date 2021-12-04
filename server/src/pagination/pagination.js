"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productStorage_1 = __importDefault(require("../storage/productStorage"));
function pagination(req, res, next) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const start = (page - 1) * limit;
    const end = page * limit;
    const results = productStorage_1.default.products.slice(start, end);
    res.json(results);
}
exports.default = pagination;
