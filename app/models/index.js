const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 100000,
  },
  define: {
    timestamps: false,
  },
  pool: {
    max: 25,
    min: 0,
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.products = require("./products.model.js")(sequelize, Sequelize);

module.exports = db;
