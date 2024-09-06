const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ComicList = sequelize.define(
    "ComicList",
    {
      comicId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      indexes: [{ unique: true, fields: ["comicId"] }],
    }
  );

  return ComicList;
};
