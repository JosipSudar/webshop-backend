module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("orders", {
    OrdersID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncremet: true,
    },
    CustomerID: {
      type: Sequelize.INTEGER,
    },
    CustomerFirstName: {
      type: Sequelize.STRING,
    },
    CustomerLastName: {
      type: Sequelize.STRING,
    },
    Address: {
      type: Sequelize.STRING,
    },
    Products: {
      type: Sequelize.STRING,
    },
    Paying: {
      type: Sequelize.STRING,
    },
    OrdersTotal: {
      type: Sequelize.INTEGER,
    },
    OrdersDateAndTime: {
      type: Sequelize.DATE,
    },
    OrdersStatus: {
      type: Sequelize.STRING,
    },
  });

  return Orders;
};
