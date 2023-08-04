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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var http_status_codes_1 = require("http-status-codes");
var index_model_js_1 = require("../model/index.model.js");
var rep_model_js_1 = require("../model/rep.model.js");
var createRep = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newRep, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, rep_model_js_1["default"].create(req.body)];
            case 1:
                newRep = _a.sent();
                return [2 /*return*/, res
                        .status(http_status_codes_1.StatusCodes.OK)
                        .send("welcome to the team ".concat(newRep.name))];
            case 2:
                error_1 = _a.sent();
                if (error_1)
                    console.log(error_1);
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldnt save new rep")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createNetOp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Arr, Budget, Category, DM, Notes, Prospected, clientName, Rep, qcPoints, Value, Timeline, newNetCase, client, repName, _id, rep, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body.input, Arr = _a.Arr, Budget = _a.Budget, Category = _a.Category, DM = _a.DM, Notes = _a.Notes, Prospected = _a.Prospected, clientName = _a.clientName, Rep = _a.Rep, qcPoints = _a.qcPoints, Value = _a.Value, Timeline = _a.Timeline;
                return [4 /*yield*/, index_model_js_1["default"].create({
                        Arr: Arr,
                        Budget: Budget,
                        Category: Category,
                        DM: DM,
                        Notes: Notes,
                        Prospected: Prospected,
                        clientName: clientName,
                        repName: Rep,
                        qcPoints: qcPoints,
                        Value: Value,
                        Timeline: Timeline
                    })];
            case 1:
                newNetCase = _b.sent();
                console.log("new net op", newNetCase);
                client = newNetCase.clientName, repName = newNetCase.repName, _id = newNetCase._id;
                return [4 /*yield*/, rep_model_js_1["default"].findById(repName)];
            case 2:
                rep = _b.sent();
                return [4 /*yield*/, (rep === null || rep === void 0 ? void 0 : rep.cases.push(_id))];
            case 3:
                _b.sent();
                rep === null || rep === void 0 ? void 0 : rep.save();
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.OK).send("successfully added ".concat(client))];
            case 4:
                error_2 = _b.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldn't add net op")];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getAllReps = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reps, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, rep_model_js_1["default"].find({}).populate("cases")];
            case 1:
                reps = _a.sent();
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.OK).json({ message: "all reps", reps: reps })];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldn't return reps")];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteNet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, netCaseFound, repName, findRepAndDeleteCase, casesArr, i, deletedNet, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                id = req.params.id;
                return [4 /*yield*/, index_model_js_1["default"].findById(id)];
            case 1:
                netCaseFound = _a.sent();
                return [4 /*yield*/, netCaseFound];
            case 2:
                repName = (_a.sent()).repName;
                return [4 /*yield*/, rep_model_js_1["default"].findById(repName)];
            case 3:
                findRepAndDeleteCase = _a.sent();
                casesArr = findRepAndDeleteCase === null || findRepAndDeleteCase === void 0 ? void 0 : findRepAndDeleteCase.cases;
                for (i = (casesArr === null || casesArr === void 0 ? void 0 : casesArr.length) - 1; i >= 0; i--) {
                    console.log(casesArr[i].toString() === id);
                    if (casesArr[i].toString() === id) {
                        casesArr === null || casesArr === void 0 ? void 0 : casesArr.splice(i, 1);
                    }
                }
                return [4 /*yield*/, index_model_js_1["default"].deleteOne({ _id: id })];
            case 4:
                deletedNet = _a.sent();
                console.log("todelete", findRepAndDeleteCase);
                return [2 /*return*/, res
                        .status(http_status_codes_1.StatusCodes.OK)
                        .json({ "💥 successfully deleted": deletedNet })];
            case 5:
                error_4 = _a.sent();
                console.log(error_4);
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldn't delete net option")];
            case 6: return [2 /*return*/];
        }
    });
}); };
var getAllNetOps = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var netOptions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_model_js_1["default"].find({}).populate("repName")];
            case 1:
                netOptions = _a.sent();
                try {
                    return [2 /*return*/, res
                            .status(http_status_codes_1.StatusCodes.OK)
                            .json({ message: "All the net cases", netOptions: netOptions })];
                }
                catch (error) {
                    console.log(error);
                    return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldn't find any net op")];
                }
                return [2 /*return*/];
        }
    });
}); };
var editNet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, clientName, repName, Arr, Notes, Value, Budget, Timeline, DM, Category, qcPoints, Prospected, findAndUpdate, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, req.body];
            case 1:
                _a = (_b.sent()).formData, clientName = _a.clientName, repName = _a.repName, Arr = _a.Arr, Notes = _a.Notes, Value = _a.Value, Budget = _a.Budget, Timeline = _a.Timeline, DM = _a.DM, Category = _a.Category, qcPoints = _a.qcPoints, Prospected = _a.Prospected;
                return [4 /*yield*/, index_model_js_1["default"].findByIdAndUpdate(id, {
                        clientName: clientName,
                        repName: repName._id,
                        Arr: Arr,
                        Notes: Notes,
                        Value: Value,
                        Budget: Budget,
                        Timeline: Timeline,
                        DM: DM,
                        Category: Category,
                        qcPoints: qcPoints,
                        Prospected: Prospected
                    })];
            case 2:
                findAndUpdate = _b.sent();
                console.log(findAndUpdate);
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.OK).send("successfully updated ")];
            case 3:
                error_5 = _b.sent();
                console.log(error_5);
                return [2 /*return*/, res
                        .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                        .send("🛑 couldn't update, not found")];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports["default"] = {
    getAllNetOps: getAllNetOps,
    createNetOp: createNetOp,
    createRep: createRep,
    getAllReps: getAllReps,
    deleteNet: deleteNet,
    editNet: editNet
};
