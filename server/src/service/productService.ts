import ProductStorage from "../storage/productStorage"
import Product from "../models/productModel"

const getAll = () => {
    return ProductStorage.products
}

const getById = (id: number) => {
    if (ProductStorage.products[ProductStorage.products.indexOf(ProductStorage.products.filter((p) => p.id === id)[0])] == undefined) {
        return ({
            status: "error",
            message: "Product not found"
        })
    }
    return ({
        status: "success",
        message: "Product found",
        data: ProductStorage.products[ProductStorage.products.indexOf(ProductStorage.products.filter((p) => p.id === id)[0])]
    })
}

const createProduct = (product: Product) => {
    if (product.name == undefined || product.description == undefined || product.price == undefined || product.inStock == undefined) {
        return ({
            status: "error",
            message: "Couldn't create product"
        })
    }
    let p: Product = {
        id: ProductStorage.idCount,
        name: product.name,
        description: product.description,
        price: product.price,
        inStock: product.inStock
    }
    ProductStorage.products.push(p)
    ProductStorage.idCount = ProductStorage.idCount + 1
    return ({
        status: "success",
        message: "Product created",
        data: p
    })
}

const removeProduct = (id: number) => {
    if (ProductStorage.products.find(product => { return product.id === id }) == undefined) {
        return ({
            status: "error",
            message: "Couldn't find the product to remove"
        })
    }
    ProductStorage.products = ProductStorage.products.filter(product => product.id != id)
    return ({
        status: "success",
        message: "Product removed",
        data: ProductStorage.products
    })
}

const updateProduct = (product: Product, id: number) => {
    if (product.name == undefined && product.description == undefined && product.price == undefined && product.inStock == undefined) {
        return ({
            status: "error",
            message: "Couldn't update product"
        })
    }

    if (product.name != undefined && product.name != null) {
        ProductStorage.products[ProductStorage.products.indexOf(ProductStorage.products.filter((p) => p.id === id)[0])].name = product.name
    }
    if (product.description != undefined && product.description != null) {
        ProductStorage.products[ProductStorage.products.indexOf(ProductStorage.products.filter((p) => p.id === id)[0])].description = product.description
    }
    if (product.price != undefined && product.price != null) {
        ProductStorage.products[ProductStorage.products.indexOf(ProductStorage.products.filter((p) => p.id === id)[0])].price = product.price
    }
    if (product.inStock != undefined && product.inStock != null) {
        ProductStorage.products[ProductStorage.products.indexOf(ProductStorage.products.filter((p) => p.id === id)[0])].inStock = product.inStock
    }
    return ({
        status: "success",
        message: "Product updated",
        data: ProductStorage.products[ProductStorage.products.indexOf(ProductStorage.products.filter((p) => p.id === id)[0])]
    })
}

export default { getAll, getById, createProduct, removeProduct, updateProduct }