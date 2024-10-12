const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");

const checkLogin = (req, res, next) => {
  if (!req.session.username) {
    return res.redirect("/login");
  }
  next();
};

module.exports = checkLogin;
