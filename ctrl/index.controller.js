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
const http_status_codes_1 = require("http-status-codes");
const index_model_1 = __importDefault(require("../model/index.model"));
const rep_model_1 = __importDefault(require("../model/rep.model"));
const createRep = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRep = yield rep_model_1.default.create(req.body);
        return res
            .status(http_status_codes_1.StatusCodes.OK)
            .send(`welcome to the team ${newRep.name}`);
    }
    catch (error) {
        if (error)
            console.log(error);
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldnt save new rep");
    }
});
const createNetOp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newNetCase = yield index_model_1.default.create(req.body);
        const { clientName, repName, _id } = newNetCase;
        const rep = yield rep_model_1.default.findById(repName);
        const idupdate = yield (rep === null || rep === void 0 ? void 0 : rep.cases.push(_id));
        rep === null || rep === void 0 ? void 0 : rep.save();
        console.log(rep === null || rep === void 0 ? void 0 : rep.cases, rep);
        return res.status(http_status_codes_1.StatusCodes.OK).send(`successfully added ${clientName}`);
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldn't add net op");
    }
});
const getAllNetOps = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const netOptions = yield index_model_1.default.find({}).populate("repName");
    try {
        return res
            .status(http_status_codes_1.StatusCodes.OK)
            .json({ message: "All the net cases", netOptions });
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("couldn't find any net op");
    }
});
exports.default = { getAllNetOps, createNetOp, createRep };
