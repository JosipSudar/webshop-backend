module.exports = (sequelize, Sequelize) => {
  const Products = sequelize.define("products", {
    ProductID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncremet: true,
    },
    ProductName: {
      type: Sequelize.STRING,
    },
    SupplierID: {
      type: Sequelize.INTEGER,
    },
    CategoryID: {
      type: Sequelize.INTEGER,
    },
    QuantityPerUnit: {
      type: Sequelize.STRING,
    },
    UnitPrice: {
      type: Sequelize.DOUBLE,
    },
    UnitsInStock: {
      type: Sequelize.INTEGER,
    },
  });

  return Products;
};
