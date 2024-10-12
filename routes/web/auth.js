var express = require("express");
var router = express.Router();
var md5 = require("md5");

const reg = require("../../db/auth/reg.js");
const login = require("../../db/auth/login.js");

router.get("/reg", function (req, res) {
  res.render("./auth/reg");
});

router.post("/reg", function (req, res) {
  reg(req.body.username, md5(req.body.password), res);
});

router.get("/login", function (req, res) {
  res.render("./auth/login");
});

router.post("/login", function (req, res) {
  login(req.body.username, md5(req.body.password), req, res);
  
});

router.post("/logout", function (req, res) {
  req.session.destroy(() => {
    res.render("success", { msg: "已登出", url: "/login" });
  });
});

module.exports = router;
