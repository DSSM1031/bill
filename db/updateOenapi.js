const AccountModel = require("../models/AccountModel");

async function updateOne(res, id, update, userid) {
  await AccountModel.findOneAndUpdate(
    { $and: [{ _id: id }, { userid: userid }] },
    update,
    {
      returnDocument: "after",
    }
  )
    .catch((err) => {
      console.log(err);
      res.json({
        code: "1005",
        msg: "更新失败",
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
        msg: "更新成功",
        data: val,
      });
    });
}

module.exports = updateOne;
