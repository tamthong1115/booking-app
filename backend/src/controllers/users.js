import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
  User.findOne({
    email: req.body.email, // email is unique
  })
    .then((user) => {
      if (user) {
        res.status(400).json({ message: "User already exists" });
      }

      const newUser = new User(req.body);
      return newUser.save();
    })
    .then((newUser) => {
      const token = jwt.sign(
        { userId: newUser.id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000, //1d
      });

      return res.status(200).send({ message: "User registered OK" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Something went wrong" });
    });
};
