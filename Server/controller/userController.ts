import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import path from "path";
import ejs from "ejs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  // port: 465,
  auth: {
    user: "Gideonekeke64@gmail.com",
    pass: "sgczftichnkcqksx",
  },
});

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to get Data",
      data: error.message,
    });
  }
};

export const getOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.findById(req.params.id);
    return res.status(200).json({
      message: "A User Gotten",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to get Data",
      data: error.message,
    });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, fullName } = req.body;
    const user = await userModel.findByIdAndUpdate(
      req.params.id,
      { userName, fullName },
      { new: true }
    );
    return res.status(200).json({
      message: "Upadated...",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to get Data",
      data: error.message,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Deleted...",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Couldn't Delete",
      data: error.message,
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, fullName, email, password } = req.body;
    // const numb = crypto.randomBytes(4).toString("binary");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const generateToken: string = crypto.randomBytes(32).toString("hex");
    const getToken = jwt.sign({ generateToken }, "57123wud2qwe7s5cxryujm", {
      expiresIn: "2d",
    });
    const user = await userModel.create({
      userName,
      fullName,
      email,
      password: hash,
      accessToken: 100 + Math.floor(Math.random() * 1000),
      accountNumber: Math.floor((Math.random() * Date.now()) / 100),
      verified: false,
      verfiedToken: getToken,
    });

    const file = path.join(__dirname, "../views/Mail.ejs");

    ejs.renderFile(
      file,
      { name: user?.fullName, idd: user?._id },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          var mailOpption = {
            from: '"Tester"Gideonekeke64@gmail.com',
            to: email,
            subject: "Confirm your account on Wallet",
            html: data,
          };
          transporter.sendMail(mailOpption, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Meaasge Sent:" + info.response);
            }
          });
        }
      }
    );

    return res.status(200).json({
      message: "Go Check your Mail to verify",
      // data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to get Data",
      data: error.message,
    });
  }
};

export const verifyAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await userModel.findByIdAndUpdate(
      req.params.id,
      { verified: true, verfiedToken: "" },
      { new: true }
    );
    return res.status(200).json({
      message: "Verification Complected",
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const signInUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const finduser = await userModel.findOne({ email });

    if (finduser) {
      if (finduser.verfiedToken === "" && finduser.verified === true) {
        const checkpassword = await bcrypt.compare(password, finduser.password);
        if (checkpassword) {
          const { ...info } = finduser._doc;

          return res
            .status(200)
            .json({ message: `Welcome Back ${finduser.fullName}`, data: info });
        } else {
          return res.status(404).json({
            message: "password Isn't Correct",
          });
        }
      } else {
        const file = path.join(__dirname, "../views/Mail.ejs");

        ejs.renderFile(
          file,
          { name: finduser?.fullName, idd: finduser?._id },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              var mailOpption = {
                from: '"Tester"Gideonekeke64@gmail.com',
                to: email,
                subject: "Confirm your account on Wallet",
                html: data,
              };
              transporter.sendMail(mailOpption, (err, info) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Meaasge Sent:" + info.response);
                }
              });
            }
          }
        );
        return res.status(200).json({
          message: "Go Check your Mail to verify",
          // data: user,
        });
      }
    } else {
      return res.status(404).json({
        message: "User Dose Not Exist",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Failed to get Data",
      data: error.message,
    });
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email } = req.body;
    const findUser = await userModel.findOne({ email });
    const user = await userModel.findById(req.params.id);
    const generateToken = crypto.randomBytes(32).toString("hex");
    const getToken = jwt.sign({ generateToken }, "57123wud2qwe7s5cxryujm", {
      expiresIn: "5m",
    });

    if (findUser?.verified && findUser.verfiedToken === "") {
      if (findUser) {
        const file = path.join(__dirname, "../views/ForgotPass.ejs");
        ejs.renderFile(file, { idd: findUser?._id }, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            var mailOption = {
              from: '"Tester"Gideonekeke64@gmail.com',
              to: email,
              subject: "Reset Your Wallet Account",
              html: data,
            };
            transporter.sendMail(mailOption, (err, info) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Message Sent:" + info.response);
              }
            });
          }
        });
        return res
          .status(200)
          .json({ message: "Pleas check your email to reset your Password" });
      } else {
        return res.status(404).json({ message: "Invalid User" });
      }
    } else {
      return res.status(404).json({ message: "User Dose not Exist" });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Can't perform Operation❌",
    });
  }
};

export const resetPasseword = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { password } = req.body;
    const user = await userModel.findById(req.params.id);
    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(password, salt);

    if (user) {
      if (user._id && req.params.token) {
        await userModel.findByIdAndUpdate(user._id, { password: newHash });
      } else {
        return res.status(404).json({ message: "User not Found" });
      }
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({ message: "Password Reset Sucessfull" });
  } catch (error) {
    return res.status(404).json({ message: "Couldn't Perform Operation" });
  }
};
