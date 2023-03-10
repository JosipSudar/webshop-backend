const db = require("../models");
const Articles = db.articles;
const Op = db.Sequelize.Op;
exports.getArticles = async (req, res) => {
  try {
    const articles = await Articles.findAll();
    if (articles) {
      res.send(articles);
    } else if (!articles) {
      res.send("No data");
    }
  } catch (e) {
    console.log(e);
  }
};
// Products.findByPk
exports.getArticlesByID = async (req, res) => {
  const id = req.params.id;
  try {
    const articles = await Articles.findByPk(id);
    if (articles) {
      res.send(articles);
    } else if (!articles) {
      res.send("No articles");
    }
  } catch (e) {
    console.log(e);
  }
};
