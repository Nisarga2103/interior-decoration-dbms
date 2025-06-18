const db = require("../db");

const Project = {
  getAll: async () => {
    const [results] = await db.query("SELECT * FROM Projects");
    return results;
  },

  getById: async (id) => {
    const [results] = await db.query("SELECT * FROM Projects WHERE project_id = ?", [id]);
    return results[0];
  },

  create: async (data) => {
    const [result] = await db.query("INSERT INTO Projects SET ?", [data]);
    return result;
  },

  update: async (id, data) => {
    const [result] = await db.query("UPDATE Projects SET ? WHERE project_id = ?", [data, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM Projects WHERE project_id = ?", [id]);
    return result;
  },
};

module.exports = Project;
