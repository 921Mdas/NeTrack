"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var repSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    office: { type: String, "default": "CS TORONTO" },
    cases: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "netcase" }]
});
exports["default"] = mongoose_1["default"].model("rep", repSchema);
