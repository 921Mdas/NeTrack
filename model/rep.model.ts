import mongoose, { Schema } from "mongoose";

const repSchema = new Schema({
  name: { type: String, require: true },
  office: { type: String, default: "CS TORONTO" },
});

export default mongoose.model("rep", repSchema);
