"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../ctrl/index.controller"));
const mainRouter = (0, express_1.Router)();
const { getAllNetOps, createNetOp, createRep } = index_controller_1.default;
mainRouter.get("/", (req, res) => {
    res.send("welcome to the home page");
});
mainRouter.get("/net", getAllNetOps);
mainRouter.post("/net", createNetOp);
mainRouter.post("/rep", createRep);
exports.default = mainRouter;
