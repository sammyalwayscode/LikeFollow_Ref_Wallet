import { Router } from "express";
import { follow, unFollow } from "../controller/followerController";

const router = Router();

router.route("/:followingID/:followerID").patch(follow);
router.route("/:followingID/:followerID/delete").patch(unFollow);

export default router;
