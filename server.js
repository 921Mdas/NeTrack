"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
require("dotenv").config();
require("./config.db");
app.use((0, body_parser_1.json)());
app.use("/", routes_1.default);
app.listen(port, () => {
    console.log("💥 server has started at port", port);
});
