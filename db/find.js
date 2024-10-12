const AccountModel = require("../models/AccountModel");

async function find(res, userid) {
  await AccountModel.find({ userid: userid })
    .sort({ time: -1 })
    .exec()
    .catch((err) => {
      console.log(err);
      res.status(500).send("添加失败");
    })
    .then((val) => {
      res.render("list", { accounts: val });
    });
}

module.exports = find;
