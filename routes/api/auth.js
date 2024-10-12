var express = require("express");
var router = express.Router();
var md5 = require("md5");

const login = require("../../db/auth/loginapi");


router.post("/login", function (req, res) {
  login(req.body.username, md5(req.body.password), req, res);
});

router.post("/logout", function (req, res) {
  req.session.destroy(() => {
    res.render("success", { msg: "已登出", url: "/login" });
  });
});

module.exports = router;
