const UserModel = require("../../models/UserModel");
const md5 = require("md5");

async function reg(a, b, res) {
  await UserModel.create({
    username: a,
    password: b,
  })
    .catch((err) => {
      console.log(err);
      res.status(500).send("注册失败");
    })
    .then((val) => {
      res.render("success", {
        msg: "注册成功",
        url: "/login",
      });
    });
}

module.exports = reg;
