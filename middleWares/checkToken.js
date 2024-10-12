const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");

const checkToken = (req, res, next) => {
  let token = req.get("token");
  if (!token) {
    return res.json({
      code: "2003",
      msg: "token缺失",
      data: null,
    });
  }

  jwt.verify(token, secret, (err, data) => {
    if (err) {
      return res.json({
        code: "2004",
        msg: "token校验失败",
        data: err,
      });
    }
    req.user = data
    next();
  });
};

module.exports = checkToken;
