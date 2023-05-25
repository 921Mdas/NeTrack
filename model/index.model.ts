import mongoose, { Schema } from "mongoose";

const netCaseSchema = new Schema(
  {
    clientName: {
      type: String,
      require: true,
    },
    repName: { type: Schema.Types.ObjectId, ref: "rep", require: true },
    Arr: { type: Number, default: 0 },
    Notes: { type: String, maxlength: 100 },
    Value: { type: Boolean, default: false },
    Budget: { type: Boolean, default: false },
    Timeline: { type: Boolean, default: false },
    DM: { type: Boolean, default: false },
    Category: { type: String, default: "Feeling Lucky" },
    qcPoints: { type: Number, default: 0 },
    Prospected: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("netcase", netCaseSchema);
