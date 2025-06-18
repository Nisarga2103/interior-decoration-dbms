const db = require("../db");

const ProjectMaterial = {
  getAll: async () => {
    const [results] = await db.query("SELECT * FROM Project_Materials");
    return results;
  },

  create: async (data) => {
    const [result] = await db.query("INSERT INTO Project_Materials SET ?", [data]);
    return result;
  },

  delete: async (project_id, material_id) => {
    const [result] = await db.query(
      "DELETE FROM Project_Materials WHERE project_id = ? AND material_id = ?",
      [project_id, material_id]
    );
    return result;
  },
};

module.exports = ProjectMaterial;
