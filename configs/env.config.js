require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  dbConnectionString: process.env.DB_STRING,
};
