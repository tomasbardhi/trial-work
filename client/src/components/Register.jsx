import React, { useState } from 'react'
import Api from "../api/Api"
import { useNavigate } from "react-router-dom"

function Register() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const register = async () => {
        try {
            const body = {
                name,
                password
            }
            const responseUser = await Api.post('/userAuth/register', body)
            if (responseUser.data.status === "success") {
                navigate(`/login`)
            } else {
                navigate(`/register`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth">
            <div className="card">
                <div>
                    <p>Username</p>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="submit" onClick={() => register()} ><p>Register</p></div>
            </div>
        </div>
    )
}

export default Register
