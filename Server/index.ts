import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRouter from "./router/userRouter";
import followRouter from "./router/followRouter";
import walletRouter from "./router/walletRouter";
require("./config/db");
const PORT: number = 2200;
const app: Application = express();

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server Up",
  });
});

app.get("/home", (req: Request, res: Response, testRun) => {
  return res.render("Mail", { testRun });
});

app.use("/api/users", userRouter);
app.use("/api/follow", followRouter);
app.use("/api/wallet", walletRouter);

app.listen(PORT, (): void => {
  console.log(`Server up on PORT: ${PORT}`);
});
