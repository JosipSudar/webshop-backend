const db = require("../models");
const Products = db.products;
const Op = db.Sequelize.Op;
exports.getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    if (products) {
      res.send(products);
    } else if (!products) {
      res.send("No data");
    }
  } catch (e) {
    console.log(e);
  }
};
// Products.findByPk
exports.getProductsByID = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await Products.findByPk(id);
    if (products) {
      res.send(products);
    } else if (!products) {
      res.send("No products");
    }
  } catch (e) {
    console.log(e);
  }
};
exports.getProductsByCategorie = async (req, res) => {
  const catId = req.params.id;
  try {
    const products = await Products.findAll({ where: { CategoryID: catId } });
    if (products) {
      res.send(products);
    } else if (!products) {
      res.send("No data");
    }
  } catch (e) {
    console.log(e);
  }
};
