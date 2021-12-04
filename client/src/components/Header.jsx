import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

function Header() {

    const { authenticated, setAuthenticated, setBearerToken } = useContext(AppContext)
    const navigate = useNavigate();

    return (
        <div className="header">

            <div className="logo">Product List App</div>
            {authenticated === false
                ?
                <div className="actions">
                    <div onClick={() => navigate(`/login`)} className="login">Login</div>
                    <div onClick={() => navigate(`/register`)} className="register">Register</div>
                </div>
                :
                <div className="actions">
                    <div onClick={() => {
                        setAuthenticated(false)
                        setBearerToken("")
                        navigate(`/login`)
                    }} className="logout">Logout</div>
                </div>
            }

        </div>
    )
}

export default Header
