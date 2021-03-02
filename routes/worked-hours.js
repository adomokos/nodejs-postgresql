var express = require('express');
var router = express.Router({ mergeParams: true });
const workedHours = require('../services/worked-hours');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const userId = req.params.user_id;
  try {
    const result = await workedHours.getWorkedHoursForUser(userId);

    const formattedResult = result.map((r) => {
      return {
        id: r.id,
        date: r.date.toISOString().split('T')[0],
        hours: parseFloat(r.hours),
      }
    });

    res.json(formattedResult);

  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = router;
