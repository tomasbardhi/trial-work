import UserStorage from "../storage/userStorage"
import User from "../models/userModel"
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const auth = async (user: User) => {
    if (UserStorage.users.find(u => { return u.name === user.name }) == undefined) {
        return ({
            status: "error",
            message: "Couldn't find user"
        })
    }
    const _user = UserStorage.users.find(u => { return u.name === user.name })
    if (_user != undefined) {
        const userpassword = _user.password
        try {
            if (await bcrypt.compare(user.password, userpassword)) {
                const accessToken = jwt.sign(user, "key")
                return ({
                    status: "success",
                    message: "User verified",
                    user: UserStorage.users.find(u => { return u.name === user.name }),
                    token: accessToken
                })
            } else {
                return ({
                    status: "error",
                    message: "Couldn't log in"
                })
            }
        } catch (error) {
            return ({
                status: "error",
                message: error
            })
        }
    } else {
        return ({
            status: "error",
            message: "Error on input"
        })
    }

}

export default { auth }