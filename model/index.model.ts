import mongoose, { Schema } from "mongoose";

const netCaseSchema = new Schema(
  {
    clientName: {
      type: String,
      require: true,
    },
    repName: { type: Schema.Types.ObjectId, ref: "rep", require: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("netcase", netCaseSchema);
