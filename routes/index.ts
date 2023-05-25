import { Router } from "express";
import ctrl from "../ctrl/index.controller";
const mainRouter = Router();
const { getAllNetOps, createNetOp, createRep } = ctrl;

mainRouter.get("/", (req, res) => {
  res.send("welcome to the home page");
});

mainRouter.get("/net", getAllNetOps);

mainRouter.post("/net", createNetOp);

mainRouter.post("/rep", createRep);

export default mainRouter;
