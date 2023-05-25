"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
mongoose_1.default.connect(process.env.DATABASE_URL);
const db = mongoose_1.default.connection;
db.on("connected", () => {
    console.log(`successfully connected to the db ↑`);
});
