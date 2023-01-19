import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../model/userModel";
import followersModel from "../model/followersModel";

export const follow = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await userModel.findByIdAndUpdate(
      req.params.followingID,
      {
        $push: { following: req.params.followerID },
      },
      { new: true }
    );

    await userModel.findByIdAndUpdate(
      req.params.followerID,
      {
        $push: {
          followers: req.params.followingID,
        },
      },
      { new: true }
    );
    return res.status(404).json({
      message: "Following",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Couldn't follow",
      data: error.message,
    });
  }
};

export const unFollow = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await userModel.findByIdAndUpdate(
      req.params.followingID,
      {
        $pull: { following: req.params.followerID },
      },
      { new: true }
    );

    await userModel.findByIdAndUpdate(
      req.params.followerID,
      {
        $pull: {
          followers: req.params.followingID,
        },
      },
      { new: true }
    );
    return res.status(404).json({
      message: "No More Following",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Couldn't Unfollow",
      data: error.message,
    });
  }
};
