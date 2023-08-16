const DataTypes = require("sequelize");
module.exports = (sequelize) => {
  const Practice = sequelize.define(
    "practice",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      practiceName: {
        type: DataTypes.STRING,
      },
      practiceCode: {
        type: DataTypes.INTEGER,
      },
      teamName: {
        type: DataTypes.STRING,
      },
      taxonomyID: {
        type: DataTypes.INTEGER,
      },
      npi: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    { paranoid: true }
  );

  return Practice;
};
