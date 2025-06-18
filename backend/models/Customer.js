const db = require("../db");

const Customer = {
  getAll: async () => {
    const [results] = await db.query("SELECT * FROM Customers");
    return results;
  },

  getById: async (id) => {
    const [results] = await db.query("SELECT * FROM Customers WHERE customer_id = ?", [id]);
    return results[0];
  },

  create: async (data) => {
    const [result] = await db.query("INSERT INTO Customers SET ?", [data]);
    return result;
  },

  update: async (id, data) => {
    const [result] = await db.query("UPDATE Customers SET ? WHERE customer_id = ?", [data, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM Customers WHERE customer_id = ?", [id]);
    return result;
  },
};

module.exports = Customer;
