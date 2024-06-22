const express = require('express')
const {
  getallusers } = require('../controllers/movieserver')
const router = express.Router()

router.route('/user')
  .get(getallusers)
module.exports = router;