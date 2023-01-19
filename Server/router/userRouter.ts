import { Router } from "express";
import {
  createUser,
  deleteUser,
  forgotPassword,
  getOneUser,
  getUsers,
  resetPasseword,
  updateUser,
  verifyAccount,
} from "../controller/userController";

const router = Router();

router.route("/").get(getUsers);
router.route("/:id").get(getOneUser);
router.route("/create").post(createUser);
router.route("/update/:id").patch(updateUser);
router.route("/delete/:id").delete(deleteUser);
router.route("/verify/:id").get(verifyAccount);
router.route("/passwordReset").post(forgotPassword);
router.route("/resetPassword/:id/:token").post(resetPasseword);

export default router;
