import Sequelize from "sequelize";
import {} from "dotenv/config";

const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

const db = new Sequelize("mysolar", MYSQL_USER, MYSQL_PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
  //logging: false,
});

export default db;
