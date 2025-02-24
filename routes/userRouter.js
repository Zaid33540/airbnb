//Core module
const path = require("path");

//Local module
const rootDir = require("../utils/pathUtil"); //This is file helper function which will return the root directory of the project.This will make it very easy for us to write the path of the HTML files.

const { homes } = require("./hostRouter");

//External module
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(homes);
  res.render("home", { homes, pageTitle: "airbnb Home", currentPage: "home" });
});

module.exports = userRouter;
