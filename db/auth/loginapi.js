const UserModel = require("../../models/UserModel");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config/config");

async function login(a, b, req, res) {
  await UserModel.findOne({ username: a, password: b })
    .exec()
    .then((val) => {
      if (!val) {
        res.json({
          code: "2002",
          msg: "账户或密码错误",
          data: null,
        });
        return;
      }

      let token = jwt.sign({ username: val.username, _id: val._id }, secret, {
        expiresIn: 60 * 60 * 24 * 7,
      });

      res.json({
        code: "0000",
        msg: "登录成功",
        data: token,
      });
    })
    .catch((err) => {
      console.log(err);

      res.json({
        code: "2001",
        msg: "读取失败",
        data: null,
      });
    });
}

module.exports = login;
