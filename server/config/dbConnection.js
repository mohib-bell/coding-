const { Sequelize } = require("sequelize");
const patientModel = require("../models/patient.model");
const practiceModel = require("../models/practice.model");
const providerModel = require("../models/provider.model");
const cptModel = require("../models/cpt.model");
const icdModel = require("../models/icd.model");

const sequelize = new Sequelize("Coding", "sa", "abc@1234", {
  host: "192.168.100.89",
  dialect: "mssql",
  port: 1433,
  // logging: true,
  pool: {
    max: 10,
    min: 0,
    idle: 30000,
  },
  dialectOptions: {
    encrypt: false,
  },
});

const db = {};
db.sequelize = sequelize;
db.Patient = patientModel(sequelize);
db.Practice = practiceModel(sequelize);
db.Provider = providerModel(sequelize);
db.Cpt = cptModel(sequelize);
db.Icd = icdModel(sequelize);

module.exports = db;
