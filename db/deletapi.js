const AccountModel = require("../models/AccountModel.js");

async function del(userid, id, req, res) {
  await AccountModel.findOneAndDelete({
    $and: [{ userid: userid }, { _id: id }],
  })
    .then((val) => {
      if (!val) {
        return res.json({
          code: "1007",
          msg: "找不到记录",
          data: null,
        });
      }

      res.json({
        code: "0000",
        msg: "删除成功",
        data: {},
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        code: "1003",
        msg: "删除失败",
        data: err,
      });
    });
}

module.exports = del;
