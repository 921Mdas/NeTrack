import express from "express";
import { json } from "body-parser";
import mainRouter from "./routes";
const cors = require("cors");
const app = express();
const port = 3000;

require("dotenv").config();
require("./config.db");

app.use(json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use("/", mainRouter);

app.listen(port, () => {
  console.log("💥 server has started at port", port);
});
