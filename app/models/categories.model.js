module.exports = (sequelize, Sequelize) => {
  const Categories = sequelize.define("categories", {
    CategoryID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncremet: true,
    },
    CategoryName: {
      type: Sequelize.STRING,
    },
    Description: {
      type: Sequelize.INTEGER,
    },
  });

  return Categories;
};
