const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/movies", { movies });
  } catch {
    next();
  }
});

router.get("/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrities = await Celebrity.find();
    const movie = await Movie.findById(id);
    res.render("movies/edit-movie", { movie, celebrities });
  } catch {
    next();
  }
});
