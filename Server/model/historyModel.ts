import mongoose from "mongoose";

interface User {
  wallet: {};
  amount: number;
  sendTo: string;
  recivedFrom: string;
  transactionDescription: string;
}

interface iUser extends User, mongoose.Document {}

const historyModel = new mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    wallet: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "wallet",
      },
    ],
    amount: {
      type: Number,
    },
    sendTo: {
      type: String,
    },
    recivedFrom: {
      type: String,
    },
    transactionDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iUser>("history", historyModel);
