const express = require("express");
const authenticateJWT = require("../middleware/authenticateJWT"); // 确保路径正确
const DB = require("../DB"); // 确保路径正确
const router = express.Router();

router.get("/:id", authenticateJWT, async (req, res) => {
  const id = req.params.id;
  try {
    const comic = await DB.Comic.findByPk(id, {
      include: {
        model: DB.ComicList,
        where: { comicId: id },
      },
    });

    if (comic) {
      res.json(comic);
    } else {
      res.status(404).json({ message: "Comic not found" });
    }
  } catch (error) {
    console.error("Error fetching comic:", error);
    res.status(500).json({ error: "获取特定漫画失败" });
  }
});

router.get("/list/:number", async (req, res) => {
  try {
    const number = parseInt(req.params.number, 10);

    const randomComics = await DB.Comic.findAll({
      limit: number,
      order: [[DB.sequelize.fn("RAND")]],
      include: {
        model: DB.ComicList,
        attributes: ["description"], // 确保这些字段在 ComicList 模型中存在
      },
    });

    res.json(randomComics);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
