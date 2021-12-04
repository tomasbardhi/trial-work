import express from "express"
import verifyToken from "../auth/api/verifyToken"
const router = express.Router()
import productService from "../service/productService"

// WITH PAGINATION
/*
import pagination from "../pagination/pagination"

router.get("/", pagination, (req, res) => {
    const products = productService.getAll()
    res.send(products)
})
*/

router.get("/", (req, res) => {
    const products = productService.getAll()
    res.send(products)
})

router.get("/:id", (req, res) => {
    const product = productService.getById(parseInt(req.params.id))
    res.json(product)
})

router.post("/", verifyToken, (req, res) => {
    const products = productService.createProduct(req.body)
    res.send(products)
})

router.delete("/:id", verifyToken, (req, res) => {
    const products = productService.removeProduct(parseInt(req.params.id))
    res.send(products)
})

router.put("/:id", verifyToken, (req, res) => {
    const products = productService.updateProduct(req.body, parseInt(req.params.id))
    res.send(products)
})

export default router