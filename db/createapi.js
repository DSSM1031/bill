const AccountModel = require("../models/AccountModel.js");

async function main(a, b, c, d, e,f,res) {
  await AccountModel.create({
    title: a,
    time: b,
    type: c,
    account: d,
    remarks: e,
    userid:f
  })
    .then((val) => {
      console.log("已插入");
      res.json({
        code:"0000",
        msg:"添加成功",
        data:val
      })
    })
    .catch((err) => {
      res.json({
        code:"1002",
        msg:"添加失败",
        data:err
      })
    });
}

module.exports = main;