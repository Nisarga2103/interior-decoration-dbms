const AssignedTo = require("../models/AssignedTo");

exports.getAllAssignments = async (req, res) => {
  try {
    const results = await AssignedTo.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAssignment = async (req, res) => {
  try {
    const result = await AssignedTo.getById(req.params.designer_id, req.params.project_id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignDesigner = async (req, res) => {
  try {
    await AssignedTo.create(req.body);
    res.status(201).json({ message: "Designer assigned to project" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.unassignDesigner = async (req, res) => {
  try {
    await AssignedTo.delete(req.params.designer_id, req.params.project_id);
    res.json({ message: "Assignment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
