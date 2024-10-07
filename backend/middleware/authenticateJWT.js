const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
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

module.exports = authenticateJWT;
