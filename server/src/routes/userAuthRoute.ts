import express from "express"
const router = express.Router()
import userService from "../service/userService"

router.get("/", (req, res) => {
    const users = userService.getAll()
    res.send(users)
})

router.post("/register", async (req, res) => {
    try {
        const response = await userService.registerUser(req.body)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.post("/login", async (req, res) => {
    try {
        const response = await userService.loginUser(req.body)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

export default router