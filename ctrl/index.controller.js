import { StatusCodes } from "http-status-codes";
import netModel from "../model/index.model.js";
import repModel from "../model/rep.model.js";
const createRep = async (req, res) => {
    try {
        const newRep = await repModel.create(req.body);
        return res
            .status(StatusCodes.OK)
            .send(`welcome to the team ${newRep.name}`);
    }
    catch (error) {
        if (error)
            console.log(error);
        return res.status(StatusCodes.NOT_FOUND).send("couldnt save new rep");
    }
};
const createNetOp = async (req, res) => {
    try {
        console.log("reqbody", req.body.input);
        const { input: { ClientName, Rep, ARR, Notes, Category, QC, Value, DM, Budget, Timeline, isProspected, }, } = req.body;
        const newNetCase = await netModel.create({
            clientName: ClientName,
            repName: Rep,
            Arr: ARR,
            Notes: Notes,
            Category: Category,
            qcPoints: QC,
            Value: Value,
            DM: DM,
            Budget: Budget,
            Timeline: Timeline,
            Prospected: isProspected,
        });
        const { clientName, repName, _id } = newNetCase;
        const rep = await repModel.findById(repName);
        await (rep === null || rep === void 0 ? void 0 : rep.cases.push(_id));
        rep === null || rep === void 0 ? void 0 : rep.save();
        return res.status(StatusCodes.OK).send(`successfully added ${clientName}`);
    }
    catch (error) {
        console.log(error);
        return res.status(StatusCodes.NOT_FOUND).send("couldn't add net op");
    }
};
const getAllReps = async (_req, res) => {
    try {
        const reps = await repModel.find({}).populate("cases");
        return res.status(StatusCodes.OK).json({ message: "all reps", reps });
    }
    catch (error) {
        console.log(error);
        return res.status(StatusCodes.NOT_FOUND).send("couldn't return reps");
    }
};
const getAllNetOps = async (_req, res) => {
    const netOptions = await netModel.find({}).populate("repName");
    try {
        return res
            .status(StatusCodes.OK)
            .json({ message: "All the net cases", netOptions });
    }
    catch (error) {
        console.log(error);
        return res.status(StatusCodes.NOT_FOUND).send("couldn't find any net op");
    }
};
export default { getAllNetOps, createNetOp, createRep, getAllReps };
