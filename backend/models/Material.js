const db = require("../db");

const Material = {
  getAll: async () => {
    const [results] = await db.query("SELECT * FROM Materials");
    return results;
  },

  getById: async (id) => {
    const [results] = await db.query("SELECT * FROM Materials WHERE material_id = ?", [id]);
    return results[0];
  },

  create: async (data) => {
    const [result] = await db.query("INSERT INTO Materials SET ?", [data]);
    return result;
  },

  update: async (id, data) => {
    const [result] = await db.query("UPDATE Materials SET ? WHERE material_id = ?", [data, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM Materials WHERE material_id = ?", [id]);
    return result;
  },
};

module.exports = Material;
