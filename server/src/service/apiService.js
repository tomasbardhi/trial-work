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
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = (user) => __awaiter(void 0, void 0, void 0, function* () {
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
                const accessToken = jwt.sign(user, "key");
                return ({
                    status: "success",
                    message: "User verified",
                    user: userStorage_1.default.users.find(u => { return u.name === user.name; }),
                    token: accessToken
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
exports.default = { auth };
