import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import netModel from "../model/index.model";
import repModel from "../model/rep.model";

const createRep: RequestHandler = async (req, res, next) => {
  try {
    const newRep = await repModel.create(req.body);
    return res
      .status(StatusCodes.OK)
      .send(`welcome to the team ${newRep.name}`);
  } catch (error) {
    if (error) console.log(error);
    return res.status(StatusCodes.NOT_FOUND).send("couldnt save new rep");
  }
};

const createNetOp: RequestHandler = async (req, res, next) => {
  try {
    const { clientName } = await netModel.create(req.body);
    console.log(req.body);
    return res.status(StatusCodes.OK).send(`successfully added ${clientName}`);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.NOT_FOUND).send("couldn't add net op");
  }
};

const getAllNetOps: RequestHandler = async (req, res, next) => {
  const netOptions = await netModel.find({}).populate("repName");
  try {
    return res
      .status(StatusCodes.OK)
      .json({ message: "All the net cases", netOptions });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.NOT_FOUND).send("couldn't find any net op");
  }
};

export default { getAllNetOps, createNetOp, createRep };
