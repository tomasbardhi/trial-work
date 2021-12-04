import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductListPage from "./routes/ProductListPage"
import LoginPage from "./routes/LoginPage"
import RegisterPage from "./routes/RegisterPage"
import "./style/style.css"
import { AppContextProvider } from "./context/AppContext"

const App = () => {
    return (
        <AppContextProvider>
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<ProductListPage />} ></Route>
                        <Route exact path="/login" element={<LoginPage />} ></Route>
                        <Route exact path="/register" element={<RegisterPage />} ></Route>
                    </Routes>
                </Router>
            </div>
        </AppContextProvider>
    )
}

export default App