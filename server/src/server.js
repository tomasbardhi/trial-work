"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const apiAuthRoute_1 = __importDefault(require("./routes/apiAuthRoute"));
const userAuthRoute_1 = __importDefault(require("./routes/userAuthRoute"));
const cors = require("cors");
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use("/api/apiAuth", apiAuthRoute_1.default);
app.use("/api/product", productRoute_1.default);
app.use("/api/userAuth", userAuthRoute_1.default);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
