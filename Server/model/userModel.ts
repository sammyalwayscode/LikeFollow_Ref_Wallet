import mongoose from "mongoose";

interface User {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  accessToken: number;
  accountNumber: number;
  verified: boolean;
  verfiedToken: string;
  token?: string;
  followers: {}[];
  following: {}[];
  wallet: {}[];
  _doc: {};
}

interface iUser extends User, mongoose.Document {}

const userModel = new mongoose.Schema({
  userName: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  accessToken: {
    type: Number,
  },
  accountNumber: {
    type: Number,
  },
  verified: {
    type: Boolean,
  },
  verfiedToken: {
    type: String,
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "followers",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "following",
    },
  ],
  wallet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallet",
    },
  ],
});

export default mongoose.model<iUser>("users", userModel);
