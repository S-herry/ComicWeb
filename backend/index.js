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
  if (token == null)
    return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, "chick", (err, user) => {
    if (err) {
      console.error("Token verification failed:", err); // 添加日志记录
      return res.status(403).json({ error: "Forbidden" }); // 返回更具体的错误信息
    }
    req.user = user;
    next();
  });
};

app.post("/login", express.json(), async (req, res) => {
  const { email, password } = req.body;

  try {
    const userSql = `SELECT * FROM comicweb.users WHERE users.email = ?`;
    const user = await new Promise((resolve, reject) => {
      DB.query(userSql, [email], async (err, results) => {
        if (err) return reject(err);
        await resolve(results[0]); // 確保返回單個用戶對象
      });
    });

    if (!user) {
      return res.json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, name: user.name, email: user.email },
      "chick",
      {
        expiresIn: "1h",
      }
    );
    res.json({ token: token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/register", express.json(), async (req, res, next) => {
  let { name, email, password } = req.body;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    password = hashedPassword;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  let sql = `insert into users(name, email, password) values (?,?,?)`;
  const values = [name, email, password];
  DB.query(sql, values, function (err, result) {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.json({ repeat: true });
      }
      console.error(err);
      return res.status(500).json({ error: "Database Error" });
    }
    res.redirect("http://localhost:9000/login");
  });
});

app.get("/user", authenticateJWT, (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

app.listen(port, hostname, () => {
  console.log(`${hostname}:${port} 啟動`);
});
