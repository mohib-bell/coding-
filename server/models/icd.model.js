const DataTypes = require("sequelize");
module.exports = (sequelize) => {
  const ICD = sequelize.define(
    "icd",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      icdCode: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    { paranoid: true }
  );

  return ICD;
};
