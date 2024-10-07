const express = require("express");
const authenticateJWT = require("../middleware/authenticateJWT"); // 确保路径正确

const router = express.Router(); // 使用 router 而不是 app

router.get("/", authenticateJWT, (req, res) => {
  try {
    res.json({ user: true, userData: req.user });
  } catch (err) {
    res.status(500).json({ user: false, message: "内部服务器错误" });
  }
});

module.exports = router; // 导出 router 而不是 app
