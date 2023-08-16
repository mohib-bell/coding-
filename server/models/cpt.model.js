const DataTypes = require("sequelize");
module.exports = (sequelize) => {
  const CPT = sequelize.define(
    "cpt",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cptCode: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      fee: {
        type: DataTypes.INTEGER,
      },
      tos: {
        type: DataTypes.STRING,
      },
      speciality: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    { paranoid: true }
  );

  return CPT;
};
