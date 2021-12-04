import React, { useState } from 'react'

function ProductAdd({ addProduct }) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [inStock, setInStock] = useState(false)

    return (
        <div className="productAdd">
            <input placeholder="Product name" type="text" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Product description" type="text" onChange={(e) => setDescription(e.target.value)} />
            <input placeholder="Product price" type="text" onChange={(e) => setPrice(e.target.value)} />
            <div className="checkboxDiv">
                <input type="checkbox" onChange={(e) => setInStock(e.target.checked)} />
                <div>
                    <p>In Stock</p>
                </div>
            </div>
            <div className="action" onClick={() => {
                addProduct(name, description, price, inStock)
                setName("")
                setDescription("")
                setPrice("")
                setInStock(false)
            }} >ADD</div>
        </div>
    )
}

export default ProductAdd
