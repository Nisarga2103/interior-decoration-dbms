const Designer = require("../models/Designer");

exports.getAllDesigners = async (req, res) => {
  try {
    const results = await Designer.getAll(); // This should be a promise
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getDesignerById = async (req, res) => {
  try {
    const result = await Designer.getById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDesigner = async (req, res) => {
  try {
    const result = await Designer.create(req.body);
    res.status(201).json({ message: "Designer added", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDesigner = async (req, res) => {
  try {
    await Designer.update(req.params.id, req.body);
    res.json({ message: "Designer updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDesigner = async (req, res) => {
  try {
    await Designer.delete(req.params.id);
    res.json({ message: "Designer deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
