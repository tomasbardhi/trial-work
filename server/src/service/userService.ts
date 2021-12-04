import UserStorage from "../storage/userStorage"
import User from "../models/userModel"
const bcrypt = require("bcrypt")

const getAll = () => {
    return UserStorage.users
}

const registerUser = async (user: User) => {
    if (user.name == undefined || user.password == undefined) {
        return ({
            status: "error",
            message: "Couldn't register user"
        })
    }
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const u: User = {
            id: UserStorage.idCount,
            name: user.name,
            password: hashedPassword
        }
        UserStorage.users.push(u)
        UserStorage.idCount = UserStorage.idCount + 1
        return ({
            status: "success",
            message: "User registered",
            data: u
        })
    } catch (error) {
        return ({
            status: "error",
            message: error
        })
    }
}

const loginUser = async (user: any) => {
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
                return ({
                    status: "success",
                    message: "Logged in",
                    data: UserStorage.users.find(u => { return u.name === user.name })
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

export default { registerUser, getAll, loginUser }