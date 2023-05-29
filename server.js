import express from "express";
import bodyParser from "body-parser";
import mainRouter from "./routes/index.js";
import cors from "cors";
import { config } from "dotenv";
const app = express();
const port = 3000;
config();
import "./config.db.js"; // Import the config.db.js file
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE",
}));
app.use("/", mainRouter);
app.listen(port, () => {
    console.log("💥 server has started at port", port);
});
