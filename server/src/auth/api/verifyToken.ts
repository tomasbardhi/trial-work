const jwt = require("jsonwebtoken")

function verifyToken(req: any, res: any, next: any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, "key", (err: any, user: any) => {
        if (err) {
            return res.send({
                status: "error",
                message: "Could not verify token",
            })
        }
        req.user = user
        next()
    })
}

export default verifyToken