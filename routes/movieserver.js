const express = require('express')
const {
  getallusers } = require('../controllers/movieserver')
const router = express.Router()

router.route('/user')
  .get(getallusers);
router
  .route('/')
  .get((req, res) => {
    res.send("Hello from server");
  })
module.exports = router;
