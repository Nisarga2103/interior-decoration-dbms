const Material = require("../models/Material");

exports.getAllMaterials = async (req, res) => {
  try {
    const results = await Material.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterialById = async (req, res) => {
  try {
    const result = await Material.getById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMaterial = async (req, res) => {
  try {
    const result = await Material.create(req.body);
    res.status(201).json({ message: "Material added", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMaterial = async (req, res) => {
  try {
    await Material.update(req.params.id, req.body);
    res.json({ message: "Material updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  try {
    await Material.delete(req.params.id);
    res.json({ message: "Material deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
