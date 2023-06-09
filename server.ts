import express from "express";
import bodyParser from "body-parser";
import mainRouter from "./routes/index.js";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const port = 3000;

config();
import "./config.db.js"; // Import the config.db.js file

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE",
  })
);

// app.use(express.static(path.resolve(__dirname, "svelte", "build")));

app.use("/", mainRouter);

// app.get("*", function (_req, res) {
//   res.sendFile(path.resolve(__dirname, "svelte", "build", "index.html"));
// });

app.listen(port, () => {
  console.log("💥 server has started at port", port);
});
