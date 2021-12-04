import React, { useEffect, useState, useContext } from 'react'
import Api from "../api/Api"
import Products from "./Products"
import Pagination from "./Paginaton"
import ProductAdd from "./ProductAdd"
import { AppContext } from "../context/AppContext"

function ProductList() {

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tYXMiLCJwYXNzd29yZCI6IlRUIiwiaWF0IjoxNjM4NTU1MjI5fQ.b5_SzxpGRbdjDE7rNEiDRS1gWz6xM0S08zWCr5y2TJo"


    const { authenticated, bearerToken } = useContext(AppContext)
    const config = { headers: { "Authorization": `Bearer ${bearerToken}` } }

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(20)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await Api.get('/product')
                setProducts(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const deleteProduct = (id) => {
        const deleteCall = async () => {
            try {
                setLoading(true)
                const response = await Api.delete(`/product/${id}`, config)
                setProducts(response.data.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        deleteCall()
    }

    const addProduct = (name, description, price, inStock) => {
        const addCall = async () => {
            try {
                setLoading(true)
                const body = {
                    id: 1,
                    name,
                    description,
                    price,
                    inStock
                }
                await Api.post(`/product`, body, config)
                const getResponse = await Api.get(`/product`)
                setProducts(getResponse.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        addCall()
    }

    const lastProductIndex = currentPage * productsPerPage
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProducts = products.slice(firstProductIndex, lastProductIndex)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        window.scrollTo(0, 0);
    }

    const updateProduct = (product) => {
        const updateCall = async () => {
            try {
                setLoading(true)
                const body = {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    inStock: product.inStock
                }
                await Api.put(`/product/${product.id}`, body, config)
                const getResponse = await Api.get(`/product`)
                setProducts(getResponse.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        updateCall()
    }

    return (
        <div className="productionList">
            {authenticated === true ? <ProductAdd addProduct={addProduct} /> : <></>}
            <Products products={currentProducts} loading={loading} updateProduct={updateProduct} deleteProduct={deleteProduct} />
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}

export default ProductList
