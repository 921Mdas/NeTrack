import mongoose, { Schema } from "mongoose";

const repSchema = new Schema({
  name: { type: String, require: true },
  office: { type: String, default: "CS TORONTO" },
  cases: [{ type: Schema.Types.ObjectId, ref: "netcase" }],
});

export default mongoose.model("rep", repSchema);
