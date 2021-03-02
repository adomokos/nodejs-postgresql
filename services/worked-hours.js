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

async function create(userId, workedHour) {
  const result = await db.query(
    'INSERT INTO worked_hours(user_id, date, hours) VALUES ($1, $2, $3) RETURNING *'
    ,[userId, workedHour.date, workedHour.hours]
  );
  let message = 'Error in creating quote';

  if (result.length) {
    message = 'Worked hour created successfully';
  }

  return {message};
}

module.exports = {
  getWorkedHoursForUser,
  create
}
