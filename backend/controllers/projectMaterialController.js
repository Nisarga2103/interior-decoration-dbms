const ProjectMaterial = require("../models/ProjectMaterial");

exports.getAllProjectMaterials = async (req, res) => {
  try {
    const results = await ProjectMaterial.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjectMaterialById = async (req, res) => {
  try {
    const result = await ProjectMaterial.getById(req.params.project_id, req.params.material_id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProjectMaterial = async (req, res) => {
  try {
    const result = await ProjectMaterial.create(req.body);
    res.status(201).json({ message: "Project material added", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProjectMaterial = async (req, res) => {
  try {
    await ProjectMaterial.update(req.params.project_id, req.params.material_id, req.body);
    res.json({ message: "Project material updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProjectMaterial = async (req, res) => {
  try {
    await ProjectMaterial.delete(req.params.project_id, req.params.material_id);
    res.json({ message: "Project material deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
