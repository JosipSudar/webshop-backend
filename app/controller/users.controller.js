const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//auth :login
let refreshTokens = [];
exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const result = await Users.findAll({
      where: { username: username },
    });
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.status(500).json({ message: "Something go wrong! /login" });
        }
        //return response and resul if is good
        if (response && result[0].verified_email) {
          const id = result[0].user_id;
          const role_id = result[0].role_id;
          const name = result[0].user_name;
          const email = result[0].email;
          const username = result[0].username;
          const token = jwt.sign(
            { id, role_id, name, email, username },
            "jwtSecret",
            {
              expiresIn: "10d",
            }
          );
          const refreshToken = jwt.sign({ id: id }, "jwtSecret", {
            expiresIn: "20m",
          });
          refreshTokens.push(refreshToken);

          res
            .status(200)
            .json({ auth: id, token: token, refreshToken: refreshToken });
        } else {
          if (!result[0].verified_email) {
            res.send({ message: "Please verify your account!" });
          } else {
            res.send({ message: "Wrong username or password!" });
          }
        }
      });
    } else {
      res.send({ message: "Username doesnt exist!" });
    }
  } catch (e) {
    res.status(500).send({
      message: e.message || "Some error occurred while retrieving users.",
    });
  }
};
exports.CheckAuth = (req, res, next) => {
  const token = req.headers["x-access-token"];

  jwt.verify(token, "jwtSecret", (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    res.status(200).send("auth");
    next();
  });
};
//refres_token
exports.tokens = (req, res) => {
  const refreshToken = req.header("x-access-token");

  if (refreshToken == null) return res.sendStatus(401);
  //if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, "jwtSecret", (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    const accessToken = jwt.sign({ id: user.id }, "jwtSecret", {
      expiresIn: "30s",
    });
    const refreshToken = jwt.sign({ id: user.id }, "jwtSecret", {
      expiresIn: "10m",
    });
    refreshTokens.push(refreshToken);
    res.json({
      access_token: accessToken,
      refresh_token: refreshToken,
      roleId: user.name,
      isFirstLogin: false,
    });
  });
};

exports.getUser = async (req, res) => {
  try {
    const users = await Users.findAll({ where: { verified_email: true } });
    if (users) {
      res.send(users);
    } else if (!users) {
      res.send("No data");
    }
  } catch (e) {
    console.log(e);
  }
};
