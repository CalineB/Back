const client = require('../data/data.sql');

const dataMapper = {

  async getNames() {
    const names = await client.query('SELECT*FROM "names"');
    return names.rows;
  },
};

module.exports = dataMapper;
