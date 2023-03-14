const db = require("../models");
const Orders = db.orders;
const Op = db.Sequelize.Op;
exports.postOrders = async (req, res) => {
  const {
    OrdersID,
    CustomerID,
    CustomerFirstName,
    CustomerLastName,
    Address,
    Products,
    Paying,
    OrdersTotal,
    OrdersDateAndTime,
    OrdersStatus,
  } = req.body;
  try {
    await Orders.create({
      OrdersID,
      CustomerID,
      CustomerFirstName,
      CustomerLastName,
      Address,
      Products,
      Paying,
      OrdersTotal,
      OrdersDateAndTime,
      OrdersStatus,
    });
    res.status(200).send("Order is created!");
  } catch (e) {
    res.status(500).send(e.message);
    console.log(e);
  }
};
exports.getOrdersByID = async (req, res) => {
  const id = req.params.id;
  try {
    const orders = await Orders.findByPk(id);
    if (orders) {
      res.send(orders);
    } else if (!orders) {
      res.send("No orders");
    }
  } catch (e) {
    console.log(e);
  }
};
