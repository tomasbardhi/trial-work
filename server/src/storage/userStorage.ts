import User from "../models/userModel"

let users: User[] = [
    {
        id: 0,
        name: "admin",
        password: "passwd"
    }
]

let idCount: number = 1

export default { users, idCount }