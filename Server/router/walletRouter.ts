import { Router } from "express";
import {
  createWallet,
  updateWallet,
  viewWallet,
} from "../controller/walletController";

const router = Router();

router.route("/:id/create").post(createWallet);
router.route("/:id/wallet").get(viewWallet);
router.route("/:myID/:reciverID/send").patch(updateWallet);

export default router;
