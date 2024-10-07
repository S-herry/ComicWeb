const { Sequelize } = require("sequelize");
const UserModel = require("./module/users_module");
const ComicModel = require("./module/comic_module");
const ComicListModel = require("./module/comicList_module.js");
const AnnouncementModel = require("./module/announcement_module");
const comicData = require("../src/data/Comic Content/all.json");
const AnnouncementData = require("../src/data/Announcement.json");

const sequelize = new Sequelize("comicwebdb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // 禁用 SQL 日誌
});

// 定義模型
const User = UserModel(sequelize);
const Comic = ComicModel(sequelize);
const ComicList = ComicListModel(sequelize);
const Announcement = AnnouncementModel(sequelize);

Comic.hasMany(ComicList, {
  foreignKey: "comicId",
});
ComicList.belongsTo(Comic, {
  foreignKey: "comicId",
});

// AnnouncementData.map((item, index) => {
//   Announcement.create({
//     annoContent: item.content,
//   });
// });

// Object.keys(comicData).forEach((val) => {
//   const comics = comicData[val].manga.map((element) => ({
//     comicName: element.title,
//     numberList: 10, // 如果需要動態設定，可以改這個值
//     image: element.image,
//     type: comicData[val].type,
//     is_completed: element.is_completed,
//     category: element.category,
//   }));

//   Comic.bulkCreate(comics)
//     .then(() => {
//       console.log(
//         `${comics.length} comics from ${comicData[val].type} added successfully.`
//       );
//     })
//     .catch((error) => {
//       console.error(`Error adding comics from ${comicData[val].type}:`, error);
//     });
// });

// Object.keys(comicData).forEach((val) => {
//   const comics = comicData[val].manga.map((element) => ({
//     image: element.image,
//     description: element.description,
//   }));

//   ComicList.bulkCreate(comics)
//     .then(() => {
//       console.log(
//         `${comics.length} comics from ${comicData[val].type} added successfully.`
//       );
//     })
//     .catch((error) => {
//       console.error(`Error adding comics from ${comicData[val].type}:`, error);
//     });
// });

// 確認資料是否新建
sequelize
  .sync({ alter: true }) // , force: true
  .then(() => {
    console.log("模型同步完成，若有變更則已更新表結構");
  })
  .catch((err) => {
    console.error("模型同步錯誤 = " + err);
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("資料連接成功");
  })
  .catch((err) => {
    console.error("連線錯誤 = " + err);
  });

module.exports = { sequelize, User, Comic, ComicList, Announcement };
