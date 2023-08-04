"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
mongoose_1["default"].connect(process.env.DATABASE_URL);
var db = mongoose_1["default"].connection;
db.on("connected", function () {
    console.log("successfully connected to the db \u2191");
});
