const express = require("express");
const async = require("hbs/lib/async");
const celebrityRouter = express.Router();
const Celebrity = require("../models/Celebrity.model");

celebrityRouter.get("/celebrity/create", async (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

celebrityRouter.post("/celebrity", async (req, res, next) => {
  const createCelebrity = req.body;
  await Celebrity.create(createCelebrity);
});

// Celebrity.create(req.body)
//   .then((newCelebrity) => {
//     console.log("New celeb: ", newCelebrity);
//   })
//   .catch((err) => console.log("Err while creating new celebrity: ", err));

// celebrityRouter.get("/", (req, res, next) => {
//   Celebrity.find()
//     .then((allCelebrities) => {
//       res.render("celebrities/celebrities", { allCelebrities });
//     })
//     .catch((err) => console.log("Err while getting all celebrities: ", err));
// });

// all your routes here
module.exports = celebrityRouter;
