import express from "express";
import { json } from "body-parser";
import mainRouter from "./routes";

const app = express();
const port = 3000;

require("dotenv").config();
require("./config.db");

app.use(json());

app.use("/", mainRouter);

app.listen(port, () => {
  console.log("💥 server has started at port", port);
});
