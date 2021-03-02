const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUsers() {
  const rows = await db.query(
    'SELECT id, first_name, last_name, email FROM users WHERE active = true'
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

module.exports = {
  getUsers
}
