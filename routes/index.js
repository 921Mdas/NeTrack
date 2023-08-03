"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_controller_js_1 = require("../ctrl/index.controller.js");
var mainRouter = (0, express_1.Router)();
var getAllNetOps = index_controller_js_1["default"].getAllNetOps, createNetOp = index_controller_js_1["default"].createNetOp, createRep = index_controller_js_1["default"].createRep, getAllReps = index_controller_js_1["default"].getAllReps, deleteNet = index_controller_js_1["default"].deleteNet, editNet = index_controller_js_1["default"].editNet;
mainRouter.get("/", function (_req, res) {
    res.send("welcome back");
});
mainRouter.get("/net", getAllNetOps);
mainRouter.get("/rep", getAllReps);
mainRouter.post("/net", createNetOp);
mainRouter.post("/deletenet/:id", deleteNet);
mainRouter.post("/editnet/:id", editNet);
mainRouter.post("/rep", createRep);
exports["default"] = mainRouter;
