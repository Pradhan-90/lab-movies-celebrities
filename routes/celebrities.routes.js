const express = require("express");
const async = require("hbs/lib/async");
const celebrityRouter = express.Router();
const Celebrity = require("../models/Celebrity.model");

celebrityRouter.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/celebrities", { celebrities });
  } catch (err) {
    console.log(err);
    next();
  }
});

celebrityRouter.get("/create", async (req, res, next) => {
  console.log("create celebrities");
  res.render("celebrities/new-celebrity");
});

celebrityRouter.post("/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities/");
  } catch (err) {
    console.log(err);
    res.redirect("/celebrities/");
  }
});

// all your routes here
module.exports = celebrityRouter;
