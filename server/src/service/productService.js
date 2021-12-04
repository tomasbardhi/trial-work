"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productStorage_1 = __importDefault(require("../storage/productStorage"));
const getAll = () => {
    return productStorage_1.default.products;
};
const getById = (id) => {
    if (productStorage_1.default.products[productStorage_1.default.products.indexOf(productStorage_1.default.products.filter((p) => p.id === id)[0])] == undefined) {
        return ({
            status: "error",
            message: "Product not found"
        });
    }
    return ({
        status: "success",
        message: "Product found",
        data: productStorage_1.default.products[productStorage_1.default.products.indexOf(productStorage_1.default.products.filter((p) => p.id === id)[0])]
    });
};
const createProduct = (product) => {
    if (product.name == undefined || product.description == undefined || product.price == undefined || product.inStock == undefined) {
        return ({
            status: "error",
            message: "Couldn't create product"
        });
    }
    let p = {
        id: productStorage_1.default.idCount,
        name: product.name,
        description: product.description,
        price: product.price,
        inStock: product.inStock
    };
    productStorage_1.default.products.push(p);
    productStorage_1.default.idCount = productStorage_1.default.idCount + 1;
    return ({
        status: "success",
        message: "Product created",
        data: p
    });
};
const removeProduct = (id) => {
    if (productStorage_1.default.products.find(product => { return product.id === id; }) == undefined) {
        return ({
            status: "error",
            message: "Couldn't find the product to remove"
        });
    }
    productStorage_1.default.products = productStorage_1.default.products.filter(product => product.id != id);
    return ({
        status: "success",
        message: "Product removed",
        data: productStorage_1.default.products
    });
};
const updateProduct = (product, id) => {
    if (product.name == undefined && product.description == undefined && product.price == undefined && product.inStock == undefined) {
        return ({
            status: "error",
            message: "Couldn't update product"
        });
    }
    if (product.name != undefined && product.name != null) {
        productStorage_1.default.products[productStorage_1.default.products.indexOf(productStorage_1.default.products.filter((p) => p.id === id)[0])].name = product.name;
    }
    if (product.description != undefined && product.description != null) {
        productStorage_1.default.products[productStorage_1.default.products.indexOf(productStorage_1.default.products.filter((p) => p.id === id)[0])].description = product.description;
    }
    if (product.price != undefined && product.price != null) {
        productStorage_1.default.products[productStorage_1.default.products.indexOf(productStorage_1.default.products.filter((p) => p.id === id)[0])].price = product.price;
    }
    if (product.inStock != undefined && product.inStock != null) {
        productStorage_1.default.products[productStorage_1.default.products.indexOf(productStorage_1.default.products.filter((p) => p.id === id)[0])].inStock = product.inStock;
    }
    return ({
        status: "success",
        message: "Product updated",
        data: productStorage_1.default.products[productStorage_1.default.products.indexOf(productStorage_1.default.products.filter((p) => p.id === id)[0])]
    });
};
exports.default = { getAll, getById, createProduct, removeProduct, updateProduct };
