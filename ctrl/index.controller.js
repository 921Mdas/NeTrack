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
        const { input: { Arr, Budget, Category, DM, Notes, Prospected, clientName, Rep, qcPoints, Value, Timeline, }, } = req.body;
        const newNetCase = await netModel.create({
            Arr,
            Budget,
            Category,
            DM,
            Notes,
            Prospected,
            clientName,
            repName: Rep,
            qcPoints,
            Value,
            Timeline,
        });
        console.log("new net op", newNetCase);
        const { clientName: client, repName, _id } = newNetCase;
        const rep = await repModel.findById(repName);
        await rep?.cases.push(_id);
        rep?.save();
        return res.status(StatusCodes.OK).send(`successfully added ${client}`);
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
const deleteNet = async (req, res) => {
    try {
        const id = req.params.id;
        const netCaseFound = await netModel.findById(id);
        const { repName } = await netCaseFound;
        const findRepAndDeleteCase = await repModel.findById(repName);
        const casesArr = findRepAndDeleteCase?.cases;
        for (let i = casesArr?.length - 1; i >= 0; i--) {
            console.log(casesArr[i].toString() === id);
            if (casesArr[i].toString() === id) {
                casesArr?.splice(i, 1);
            }
        }
        const deletedNet = await netModel.deleteOne({ _id: id });
        console.log("todelete", findRepAndDeleteCase);
        return res
            .status(StatusCodes.OK)
            .json({ "💥 successfully deleted": deletedNet });
    }
    catch (error) {
        console.log(error);
        return res.status(StatusCodes.NOT_FOUND).send("couldn't delete net option");
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
const editNet = async (req, res) => {
    try {
        const id = req.params.id;
        const { formData: { clientName, repName, Arr, Notes, Value, Budget, Timeline, DM, Category, qcPoints, Prospected, }, } = await req.body;
        const findAndUpdate = await netModel.findByIdAndUpdate(id, {
            clientName,
            repName: repName._id,
            Arr,
            Notes,
            Value,
            Budget,
            Timeline,
            DM,
            Category,
            qcPoints,
            Prospected,
        });
        console.log(findAndUpdate);
        return res.status(StatusCodes.OK).send(`successfully updated `);
    }
    catch (error) {
        console.log(error);
        return res
            .status(StatusCodes.NOT_FOUND)
            .send("🛑 couldn't update, not found");
    }
};
export default {
    getAllNetOps,
    createNetOp,
    createRep,
    getAllReps,
    deleteNet,
    editNet,
};
