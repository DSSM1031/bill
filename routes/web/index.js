const express = require("express");

const checkLogin = require("../../middleWares/checkLogin.js");

const main = require("../../db/create.js");
const find = require("../../db/find.js");
const del = require("../../db/delet.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/account");
});

//记账本的列表
router.get("/account", checkLogin, function (req, res) {
  //获取所有的账单信息
  find(res, req.session._id);
});

//添加记录
router.get("/account/create", checkLogin, function (req, res) {
  res.render("create");
});

//新增记录
router.post("/account", checkLogin, (req, res) => {
  const date = new Date(req.body.time);

  main(
    req.body.title,
    date,
    req.body.type,
    req.body.account,
    req.body.remarks,
    req.session._id,
    res
  );
});

//删除记录
router.get("/account/:id", checkLogin, (req, res) => {
  let id = req.params.id;
  del(req, res, id, req.session._id);
});

module.exports = router;
