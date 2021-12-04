require("dotenv").config()
import express, { Request, Response } from "express"
import productRoute from "./routes/productRoute"
import authRoute from "./routes/apiAuthRoute"
import userAuthRoute from "./routes/userAuthRoute"
const cors = require("cors")
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/apiAuth", authRoute)
app.use("/api/product", productRoute);
app.use("/api/userAuth", userAuthRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})