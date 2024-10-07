const express = require("express");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");
const DB = require("./DB");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRoutes = require("./users/user");
const comicRoutes = require("./comic/comic");

app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/comic", comicRoutes);

app.post("/auth/google", async (req, res) => {
  const CLIENT_ID =
    "628247640283-bmpcl3ro32alr1jmg04v6irpdoc3s8bg.apps.googleusercontent.com"; // Google OAuth Client ID
  const client = new OAuth2Client(CLIENT_ID);
  const { id_token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload(); // 取得google 資料
    const { name, email, sub } = payload; // 從 Google Payload 取得必要資訊
    const existingUser = await DB.User.findOne({ email: email }); // 查找是否有相同 email 的用戶

    if (!existingUser) {
      // 如果使用者不存在，創建新用戶
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(sub, saltRounds); // 使用 Google 的 `sub` 做為密碼哈希
      const newUser = await DB.User.create({
        name,
        email,
        password: hashedPassword,
      });

      // 為新用戶生成 JWT token
      const token = jwt.sign(
        { userId: newUser.id, name: newUser.name, email: newUser.email },
        "chick",
        { expiresIn: "1h" }
      );

      return res.json({ repeat: false, token: token }); // 回應新註冊的用戶
    } else {
      // 如果使用者已存在，直接生成 token
      const token = jwt.sign(
        {
          userId: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
        },
        "chick",
        { expiresIn: "1h" }
      );

      return res.json({ repeat: true, token: token }); // 回應已存在的用戶
    }
  } catch (error) {
    console.error("驗證失敗:", error);
    res.status(401).json({ status: "失敗", message: "Token 驗證失敗" });
  }
});

app.post("/login", express.json(), async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await DB.User.findOne({
      where: { email: email },
    });

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

// 公告
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
