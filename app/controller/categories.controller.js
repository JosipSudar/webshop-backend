const db = require("../models");
const Categories = db.categories;
const Op = db.Sequelize.Op;
exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    if (categories) {
      res.send(categories);
    } else if (!categories) {
      res.send("No data");
    }
  } catch (e) {
    console.log(e);
  }
};
// Products.findByPk
exports.getCategoriesByID = async (req, res) => {
  const id = req.params.id;
  try {
    const categories = await Categories.findByPk(id);
    if (categories) {
      res.send(categories);
    } else if (!categories) {
      res.send("No categories");
    }
  } catch (e) {
    console.log(e);
  }
};
