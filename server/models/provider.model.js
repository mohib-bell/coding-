const DataTypes = require("sequelize");
module.exports = (sequelize) => {
  const Provider = sequelize.define(
    "provider",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      providerName: {
        type: DataTypes.STRING,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      npi: {
        type: DataTypes.INTEGER,
      },
      taxonomyCode: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    { paranoid: true }
  );

  return Provider;
};
