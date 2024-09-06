const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Announcement = sequelize.define(
    "Announcement",
    {
      annoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      annoContent: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      indexes: [{ unique: true, fields: ["annoID"] }],
    }
  );

  return Announcement;
};
