import mongoose from "mongoose";

interface User {
  user: {};
}

interface iUser extends User, mongoose.Document {}

const followersModel = new mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<iUser>("followers", followersModel);
