const express = require("express");
const jwt = require("jsonwebtoken");
const checkToken = require("../../middleWares/checkToken.js");

const main = require("../../db/createapi.js");
const find = require("../../db/findapi.js");
const findOne = require("../../db/findOneapi.js");
const del = require("../../db/deletapi.js");
const updateOne = require("../../db/updateOenapi.js");

const router = express.Router();

//记账本的列表
router.get("/account", checkToken, function (req, res, next) {
  find(req.user._id, res);
  console.log(req.user);
});

//新增记录
router.post("/account", checkToken, (req, res) => {
  const date = new Date(req.body.time);

  main(
    req.body.title,
    date,
    req.body.type,
    req.body.account,
    req.body.remarks,
    req.user._id,
    res
  );
});

//删除记录
router.delete("/account/:id", checkToken, (req, res) => {
  let id = req.params.id;
  del(req.user._id, id, req, res);
});

//获取单个记录
router.get("/account/:id", checkToken, (req, res) => {
  let { id } = req.params;
  findOne(res, id, req.user._id);
});

//更新账单信息
router.patch("/account/:id", checkToken, (req, res) => {
  let { id } = req.params;
  updateOne(res, id, req.body,req.user._id);
});

module.exports = router;
