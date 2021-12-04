import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"
import ContentEditable from 'react-contenteditable'

function Products({ products, loading, updateProduct, deleteProduct }) {

    const { authenticated } = useContext(AppContext)
    const updatedProducts = []

    const handleChange = (_product, para) => {
        updatedProducts.push({ ..._product, ...para })
    }

    const updateProductController = (_product) => {
        if (_product.length > 0) {
            updateProduct(_product.pop())
        } else {
            return
        }
    }

    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (authenticated) {
        return (
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <div>{product.id}</div>
                            <div className={product.inStock ? "stock inStock" : "stock"}></div>
                            <div className="productName">
                                <ContentEditable
                                    onChange={(name) => handleChange(product, { name: name.target.value })}
                                    html={product.name}
                                />
                            </div>
                            <div className="productDescription">
                                <ContentEditable
                                    onChange={(description) => handleChange(product, { description: description.target.value })}
                                    html={product.description}
                                />
                            </div>
                            <div className="productOther">
                                <div className="actions">
                                    <div onClick={() => updateProductController(updatedProducts.filter((p) => p.id === product.id))} className="update"><p>Update</p></div>
                                    <div onClick={() => deleteProduct(product.id)} className="delete"><p>Delete</p></div>
                                </div>
                                <div className="priceWrapper">
                                    <div className="productPrice">
                                        <ContentEditable
                                            onChange={(price) => handleChange(product, { price: price.target.value })}
                                            html={'' + product.price}
                                        />
                                    </div>
                                    <div className="currency"><p>€</p></div>
                                </div>

                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <div className={product.inStock ? "stock inStock" : "stock"}></div>
                            <div className="productName"><p>{product.name}</p></div>
                            <div className="productDescription"><p>{product.description}</p></div>
                            <div className="productOther">
                                <div className="productPrice"><p>{product.price} €</p></div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }


}

export default Products
