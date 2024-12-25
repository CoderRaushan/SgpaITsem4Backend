
import mongoose from "mongoose";
const SGPA = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    sgpaRecords: 
    [
      {
        sgpa: Number,
        timestamp: { type: Date, default: Date.now }, 
      },
    ],
  },
  { timestamps: true }
); //createdAt & updatedAt
const  Sgpa=mongoose.model("SGPA", SGPA);
export default Sgpa;
