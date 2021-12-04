"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyToken_1 = __importDefault(require("../auth/api/verifyToken"));
const router = express_1.default.Router();
const productService_1 = __importDefault(require("../service/productService"));
// WITH PAGINATION
/*
import pagination from "../pagination/pagination"

router.get("/", pagination, (req, res) => {
    const products = productService.getAll()
    res.send(products)
})
*/
router.get("/", (req, res) => {
    const products = productService_1.default.getAll();
    res.send(products);
});
router.get("/:id", (req, res) => {
    const product = productService_1.default.getById(parseInt(req.params.id));
    res.json(product);
});
router.post("/", verifyToken_1.default, (req, res) => {
    const products = productService_1.default.createProduct(req.body);
    res.send(products);
});
router.delete("/:id", verifyToken_1.default, (req, res) => {
    const products = productService_1.default.removeProduct(parseInt(req.params.id));
    res.send(products);
});
router.put("/:id", verifyToken_1.default, (req, res) => {
    const products = productService_1.default.updateProduct(req.body, parseInt(req.params.id));
    res.send(products);
});
exports.default = router;
