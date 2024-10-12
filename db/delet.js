const AccountModel = require("../models/AccountModel.js");

async function del(req, res, id, userid) {
  await AccountModel.deleteOne({ $and: [{ _id: id }, { userid: userid }] })
    .then((val) => {
      if (!val) {
        return res.render("failed", { msg: "删除失败", url: "/account" });
      }
      res.render("success", { msg: "删除成功", url: "/account" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("删除失败");
    });
}

module.exports = del;
