import mongoose from "mongoose";
const URL = "mongodb://localhost/wallet";

mongoose
  .connect(URL)
  .then(() => {
    console.log("Data Base Connected");
  })
  .catch((err) => console.log("An Error Occoured: " + err));
