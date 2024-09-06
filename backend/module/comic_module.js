const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Comic = sequelize.define(
    "Comic",
    {
      comicId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comicName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("冒險", "靈異", "愛情", "BL", "治癒", "青春"),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberList: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      is_completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      indexes: [
        { unique: true, fields: ["comicId"] }, // 针对 comicName 字段的唯一索引
        { unique: true, fields: ["comicName"] }, // 针对 comicName 字段的唯一索引
        // 其他索引可以根据需要添加
      ],
    }
  );

  return Comic;
};
