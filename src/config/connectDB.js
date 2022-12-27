const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("phongkham", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
};

module.exports = connectDB;
