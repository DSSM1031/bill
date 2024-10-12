const AccountModel = require("../models/AccountModel");

async function findOne(res, id, userid) {
  await AccountModel.findOne({ $and: [{ _id: id }, { userid: userid }] })
    .exec()
    .catch((err) => {
      console.log(err);
      res.json({
        code: "1004",
        msg: "读取失败",
        data: err,
      });
    })
    .then((val) => {
      if (!val) {
        return res.json({
          code: "1008",
          msg: "找不到记录",
          data: null,
        });
      }
      res.json({
        code: "0000",
        msg: "读取成功",
        data: val,
      });
    });
}

module.exports = findOne;
