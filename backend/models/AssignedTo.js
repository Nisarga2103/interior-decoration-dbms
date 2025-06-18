const db = require("../db");

const AssignedTo = {
  getAll: async () => {
    const [results] = await db.query("SELECT * FROM Assigned_To");
    return results;
  },

  create: async (data) => {
    const [result] = await db.query("INSERT INTO Assigned_To SET ?", [data]);
    return result;
  },

  delete: async (designer_id, project_id) => {
    const [result] = await db.query(
      "DELETE FROM Assigned_To WHERE designer_id = ? AND project_id = ?",
      [designer_id, project_id]
    );
    return result;
  },
};

module.exports = AssignedTo;
