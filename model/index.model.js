"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var netCaseSchema = new mongoose_1.Schema({
    clientName: { type: String, required: true },
    repName: { type: mongoose_1.Schema.Types.ObjectId, ref: "rep", required: true },
    Arr: { type: Number, "default": 0 },
    Notes: { type: String, maxlength: 100 },
    Value: { type: Boolean, "default": false },
    Budget: { type: Boolean, "default": false },
    Timeline: { type: Boolean, "default": false },
    DM: { type: Boolean, "default": false },
    Category: { type: String, "default": "Feeling Lucky" },
    qcPoints: { type: Number, "default": 0 },
    Prospected: { type: Boolean, "default": false }
}, {
    timestamps: true
});
exports["default"] = mongoose_1["default"].model("netcase", netCaseSchema);
