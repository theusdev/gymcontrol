const { Pool } = require("pg")

module.exports = new Pool({
  user: "postgres",
  password: "191523",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
})