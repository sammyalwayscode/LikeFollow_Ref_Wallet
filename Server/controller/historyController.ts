import { Request, Response } from "express";
import walletModel from "../model/walletModel";
import historyModel from "../model/historyModel";

const createHistory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { amount, sendTo, recivedFrom, transactionDescription } = req.body;
    const user = await walletModel.findById(req.params.myID);
    const myHistory = await historyModel.findById(req.params.myID);
    const yourHistory = await historyModel.findById(req.params.reciverID);

    await historyModel.findByIdAndUpdate(
      req.params.myID,
      {
        amount,
        sendTo,
        recivedFrom,
        transactionDescription,
      },
      { new: true }
    );

    await historyModel.findByIdAndUpdate(
      req.params.reciverID,
      {
        amount,
        sendTo,
        recivedFrom,
        transactionDescription,
      },
      { new: true }
    );
    return res.status(201).json({ message: `History Created` });
  } catch (error) {
    return res.status(404).json({ message: `An Error Ocoured ${error}` });
  }
};
