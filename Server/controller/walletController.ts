import { Request, Response } from "express";
import mongoose from "mongoose";
import userModel from "../model/userModel";
import walletModel from "../model/walletModel";

export const createWallet = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const {totalBalance,token,credit,debit, amount,paymentDescription } = req.body;
    const getUser = await userModel.findById(req.params.id);
    const getWallet = await walletModel.create({
      _id: getUser?._id!,
      totalBalance: 1000,
      credit: 0,
      debit: 0,
      token: getUser?.accessToken,
      paymentDescription: "",
    });

    getUser?.wallet.push(new mongoose.Types.ObjectId(getWallet._id));
    getUser?.save();

    return res.status(201).json({ message: "Wallet Created", data: getWallet });
  } catch (error) {
    return res.status(404).json({ message: `Error ${error}` });
  }
};

export const viewWallet = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const wallet = await userModel.findById(req.params.id).populate({
      path: "wallet",
      options: { createdAt: -1 },
    });

    return res.status(201).json({
      message: "Wallet Gottem",
      data: wallet,
    });
  } catch (error) {
    return res.status(404).json(`An Error Occoured ${error}`);
  }
};

export const updateWallet = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { amount, token, paymentDescription } = req.body;
    const user = await userModel.findById(req.params.myID);
    const myWallet = await walletModel.findById(req.params.myID);
    const yourWallet = await walletModel.findById(req.params.reciverID);

    if (user?.accessToken === token) {
      await walletModel.findByIdAndUpdate(
        req.params.myID,
        {
          totalBalance: myWallet?.totalBalance! - amount,
          debit: amount,
          credit: 0,
          paymentDescription,
        },
        { new: true }
      );

      await walletModel.findByIdAndUpdate(
        req.params.reciverID,
        {
          totalBalance: yourWallet?.totalBalance! + amount,
          credit: amount,
          debit: 0,
          paymentDescription,
        },
        { new: true }
      );
    } else {
      return res.status(404).json({
        message: `You have entered the wrong Token... ${token} is Not Correct`,
      });
    }

    return res
      .status(201)
      .json({ message: `Transfer of ${amount} was Sucessfull` });
  } catch (error) {
    return res.status(404).json({
      message: `An Error Occoured ${error}`,
    });
  }
};
