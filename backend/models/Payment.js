const db = require("../db");

const Payment = {
  getAll: async () => {
    const [results] = await db.query("SELECT * FROM Payments");
    return results;
  },

  getById: async (id) => {
    const [results] = await db.query("SELECT * FROM Payments WHERE payment_id = ?", [id]);
    return results[0];
  },

  create: async (data) => {
    const [result] = await db.query("INSERT INTO Payments SET ?", [data]);
    return result;
  },

  update: async (id, data) => {
    const [result] = await db.query("UPDATE Payments SET ? WHERE payment_id = ?", [data, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM Payments WHERE payment_id = ?", [id]);
    return result;
  },
};

module.exports = Payment;
