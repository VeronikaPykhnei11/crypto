const { Client } = require("pg");
export const clientDb = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});
clientDb.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
