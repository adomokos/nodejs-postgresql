var express = require('express');
var router = express.Router();
const users = require('../services/users');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getUsers());
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = router;
