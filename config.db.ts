import mongoose from "mongoose";
import { config } from "dotenv";

config();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`successfully connected to the db ↑`);
});
