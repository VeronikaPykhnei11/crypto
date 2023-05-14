const Pool = require("pg").Pool;

const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
};

const pool = new Pool(dbConfig);

module.exports = pool;