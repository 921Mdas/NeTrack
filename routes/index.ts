import { Router } from "express";
import ctrl from "../ctrl/index.controller.js";
const mainRouter = Router();
const { getAllNetOps, createNetOp, createRep, getAllReps, deleteNet, editNet } =
  ctrl;
mainRouter.get("/", (_req, res) => {
  res.send("welcome back");
});
mainRouter.get("/net", getAllNetOps);
mainRouter.get("/rep", getAllReps);

mainRouter.post("/net", createNetOp);
mainRouter.post("/deletenet/:id", deleteNet);
mainRouter.post("/editnet/:id", editNet);
mainRouter.post("/rep", createRep);

export default mainRouter;
