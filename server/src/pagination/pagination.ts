import ProductStorage from "../storage/productStorage"

function pagination(req: any, res: any, next: any) {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const start = (page - 1) * limit
    const end = page * limit
    const results = ProductStorage.products.slice(start, end)
    res.json(results)
}

export default pagination