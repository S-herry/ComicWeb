const express = require("express");
const cors = require("cors");

const DB = require("./DB");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
const authenticateJWT = (req, res, next) => {
  // 从请求头中获取 Token
  const token = req.headers["authorization"]?.split(" ")[1];
  if (token == undefined || token == null)
    return res.json({ user: false, error: "No token provided" });

  jwt.verify(token, "chick", (err, user) => {
    if (err) {
      return res.json({ user: false, error: "Forbidden" }); // 返回更具体的错误信息
    }
    req.user = user;
    next();
  });
};

app.post("/login", express.json(), async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await DB.User.findOne({
      where: { email: email },
    });

    // 檢查是否有使用者存在
    if (user.length === 0) {
      return res.status(401).json({ user: false, token: null });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ user: false, error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, name: user.name, email: user.email },
      "chick",
      { expiresIn: "1h" }
    );

    res.json({
      user: true,
      token: token,
    });
  } catch (err) {
    res.json({
      user: false,
    });
    //   res.status(500).json({ error: "Login failed" });
  }
});

app.post("/register", express.json(), async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await DB.User.findOne({ where: { email } });
    if (existingUser) {
      return res.json({ repeat: true });
    }

    // 哈希密碼
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 創建新使用者
    const newUser = await DB.User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({ repeat: false, user: newUser });
  } catch (err) {
    console.error(err);
    // res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/user", authenticateJWT, (req, res) => {
  try {
    res.json({ user: true, userData: req.user });
  } catch (err) {
    res.json({ user: false });
  }
});

app.get("/comic/:id", authenticateJWT, async (req, res) => {
  let id = req.params.id;
  try {
    const comic = await DB.Comic.findByPk(id, {
      include: {
        model: DB.ComicList,
        where: { comicId: id },
      },
    });

    if (comic) {
      res.json(comic);
      if (comic.ComicLists.length > 0) {
        comic.ComicLists[0];
      } else {
        res.json("ComicList found");
      }
    } else {
      res.json("Comic not found");
    }
  } catch (error) {
    res.json({ "Error fetching specific comic and list:": error });
  }
});

app.get("/comiclist/:number", async (req, res) => {
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

app.get("/anno/:number", async (req, res) => {
  try {
    const number = parseInt(req.params.number, 10);
    const randomAnno = await DB.Announcement.findAll({
      limit: number,
      order: [[DB.sequelize.fn("RAND")]],
    });
    res.json(randomAnno);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, hostname, () => {
  console.log(`${hostname}:${port} 啟動`);
});
