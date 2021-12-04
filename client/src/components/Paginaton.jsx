import React from 'react'

function Paginaton({ productsPerPage, totalProducts, paginate, currentPage }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            <ul>
                {pageNumbers.map((pageNumber) => {
                    return (
                        <li className={currentPage === pageNumber ? "currentPage" : ""} onClick={() => paginate(pageNumber)} key={pageNumber}>
                            <p>
                                {pageNumber}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Paginaton
