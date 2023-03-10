module.exports = (sequelize, Sequelize) => {
  const Articles = sequelize.define("articles", {
    ArticleID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncremet: true,
    },
    ArticleName: {
      type: Sequelize.STRING,
    },
    ArticleDescription: {
      type: Sequelize.STRING,
    },
    ArticleText: {
      type: Sequelize.STRING,
    },
    ArticleAuthor: {
      type: Sequelize.STRING,
    },
    ArticleDate: {
      type: Sequelize.DATE,
    },
  });

  return Articles;
};
