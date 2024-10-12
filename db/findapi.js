const AccountModel = require("../models/AccountModel");

async function find(userid,res) {
  await AccountModel.find({userid:userid})
    .sort({ time: -1 })
    .exec()
    .catch((err) => {
      console.log(err);
      res.json({
        code: "1001",
        msg: "读取失败",
        data: err,
      });
    })
    .then((val) => {
      res.json({
        code: "0000",
        msg: "读取成功",
        data: val,
      });
    });
}

module.exports = find;
