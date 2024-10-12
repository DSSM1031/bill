const UserModel = require("../../models/UserModel");

async function login(a, b, req, res) {
  await UserModel.findOne({ username: a, password: b })
    .exec()
    .then((val) => {
      if (!val) {
        res.render("failed", {
          msg: "用户名或密码错误",
          url: "/login",
        });
        return;
      }

      console.log(val);
      
      req.session.username = val.username;
      req.session._id = val._id;

      res.render("success", {
        msg: "登录成功",
        url: "/account",
      });
    })
    .catch((err) => {
      console.log(err);

      res.status(500).send("请稍后再试");
    });
}

module.exports = login;
