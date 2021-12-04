import express from "express"
const router = express.Router()
const jwt = require("jsonwebtoken")
import apiService from "../service/apiService"


router.post("/login", async (req, res) => {
    try {
        const response = await apiService.auth(req.body)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

export default router