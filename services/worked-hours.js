const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getWorkedHoursForUser(userId) {
  const rows = await db.query(
    'SELECT id, date, hours FROM worked_hours WHERE user_id = $1',
    [userId]
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

module.exports = {
  getWorkedHoursForUser
}
