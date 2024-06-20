const express = require('express')
const {
  handleCreateMovie, handleGetAllMovies, handleGetMovieById, handleDeleteMovieById, handleUpdateMovieById,
  getallusers } = require('../controllers/movieserver')
const router = express.Router()

router.route('/')
  .get(handleGetAllMovies)
  .post(handleCreateMovie)

router.route('/movies/:id')
  .get(handleGetMovieById)
  .delete(handleDeleteMovieById)
  .patch(handleUpdateMovieById)
router.route('/user')
  .get(getallusers)
module.exports = router;