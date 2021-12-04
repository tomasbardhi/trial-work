"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userStorage_1 = __importDefault(require("../storage/userStorage"));
const bcrypt = require("bcrypt");
const getAll = () => {
    return userStorage_1.default.users;
};
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (user.name == undefined || user.password == undefined) {
        return ({
            status: "error",
            message: "Couldn't register user"
        });
    }
    try {
        const hashedPassword = yield bcrypt.hash(user.password, 10);
        const u = {
            id: userStorage_1.default.idCount,
            name: user.name,
            password: hashedPassword
        };
        userStorage_1.default.users.push(u);
        userStorage_1.default.idCount = userStorage_1.default.idCount + 1;
        return ({
            status: "success",
            message: "User registered",
            data: u
        });
    }
    catch (error) {
        return ({
            status: "error",
            message: error
        });
    }
});
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (userStorage_1.default.users.find(u => { return u.name === user.name; }) == undefined) {
        return ({
            status: "error",
            message: "Couldn't find user"
        });
    }
    const _user = userStorage_1.default.users.find(u => { return u.name === user.name; });
    if (_user != undefined) {
        const userpassword = _user.password;
        try {
            if (yield bcrypt.compare(user.password, userpassword)) {
                return ({
                    status: "success",
                    message: "Logged in",
                    data: userStorage_1.default.users.find(u => { return u.name === user.name; })
                });
            }
            else {
                return ({
                    status: "error",
                    message: "Couldn't log in"
                });
            }
        }
        catch (error) {
            return ({
                status: "error",
                message: error
            });
        }
    }
    else {
        return ({
            status: "error",
            message: "Error on input"
        });
    }
});
exports.default = { registerUser, getAll, loginUser };
