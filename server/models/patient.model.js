const DataTypes = require("sequelize");
module.exports = (sequelize) => {
  const Patient = sequelize.define(
    "patient",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      patientFirstName: {
        type: DataTypes.STRING,
      },
      patientLastName: {
        type: DataTypes.STRING,
      },

      account: {
        type: DataTypes.INTEGER,
      },
      dob: {
        type: DataTypes.DATE,
      },
      provider: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    },
    { paranoid: true }
  );

  return Patient;
};
