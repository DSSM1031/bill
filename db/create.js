const AccountModel = require("../models/AccountModel.js");

async function main(a, b, c, d, e,f, res) {
  await AccountModel.create({
    title: a,
    time: b,
    type: c,
    account: d,
    remarks: e,
    userid: f
  })
    .catch((err) => {
      console.log(err);
      res.status(500).send("插入失败");
    })
    .then((val) => {
      res.render("success", { msg: "添加成功", url: "/account" });
    });
}

module.exports = main;
