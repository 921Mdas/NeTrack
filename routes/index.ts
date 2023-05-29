import { Router } from "express";
import ctrl from "../ctrl/index.controller.js";
const mainRouter = Router();
const { getAllNetOps, createNetOp, createRep, getAllReps } = ctrl;

mainRouter.get("/net", getAllNetOps);
mainRouter.get("/rep", getAllReps);

mainRouter.post("/net", createNetOp);
mainRouter.post("/rep", createRep);

export default mainRouter;
