const db = require("../db");

const Designer = {
  getAll: async () => {
    const [results] = await db.query("SELECT * FROM Designers");
    return results;
  },

  getById: async (id) => {
    const [results] = await db.query("SELECT * FROM Designers WHERE designer_id = ?", [id]);
    return results[0]; // Return single designer
  },

  create: async (data) => {
    const [result] = await db.query("INSERT INTO Designers SET ?", [data]);
    return result;
  },

  update: async (id, data) => {
    const [result] = await db.query("UPDATE Designers SET ? WHERE designer_id = ?", [data, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM Designers WHERE designer_id = ?", [id]);
    return result;
  },
};

module.exports = Designer;
