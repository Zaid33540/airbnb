//Core module
const path = require("path");

//External module
const express = require("express");

//Local module
const rootDir = require("../utils/pathUtil");

//Local module
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {
    pageTitle: "airbnb Add Home",
    currentPage: "addhome",
  });
});

const homes = [];
hostRouter.post("/add-home", (req, res, next) => {
  homes.push({
    homeName: req.body.homeName,
    location: req.body.location,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image,
  });
  res.render("homeAdded", {
    pageTitle: "Home Added",
    currentPage: "homeAdded",
  });
});

exports.hostRouter = hostRouter;

exports.homes = homes;
