const {mvdata,profile} = require("../models/movieserver");

async function handleGetAllMovies(req, res) {
  const allMovies = await mvdata.find({})
  return res.json(allMovies);
}

async function handleGetMovieById(req, res) {
  const movieId = req.params.id;
  const movie = await mvdata.findById(movieId);
  return res.json(movie);
}

async function handleCreateMovie(req, res) {
  const { mtitle, myear, mgenre, mactors } = req.body;

  const actorsArray = mactors.split(",").map((actor) => actor.trim());

  const movieData = {
    title: mtitle,
    year: Number(myear),
    genre: mgenre,
    actors: actorsArray,
  };

  mvdata.create(movieData);
  return res.json({Status: "Created"});
}

async function handleDeleteMovieById(req, res) {
  const movieId = req.params.id;
  const movie = await mvdata.findByIdAndDelete(movieId);
  return res.json(movie);
}

async function handleUpdateMovieById(req, res) {
  const movieId = req.params.id;
  const body = req.body;
  const movie = await mvdata.findByIdAndUpdate(
    movieId,
    {
      title: body.mtitle,
      year: body.myear,
      genre: body.mgenre,
      actors: {
        a0: body.mactor1,
        a1: body.mactor2,
        a2: body.mactor3,
        a3: body.mactor4
      },
    },
    { new: true }
  );
  return res.json({Status:" Updated"});
}

async function getallusers(req, res) {
  const allUsers = await profile.find({})
  return res.json(allUsers);
}


module.exports = {
  handleGetAllMovies,
  handleGetMovieById,
  handleCreateMovie,
  handleDeleteMovieById,
  handleUpdateMovieById,
  getallusers
}