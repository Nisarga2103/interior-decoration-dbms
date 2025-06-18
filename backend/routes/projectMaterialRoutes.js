const express = require("express");
const router = express.Router();
const projectMaterialController = require("../controllers/projectMaterialController");

router.get("/", projectMaterialController.getAllProjectMaterials);
router.get("/:project_id/:material_id", projectMaterialController.getProjectMaterialById);
router.post("/", projectMaterialController.createProjectMaterial);
router.put("/:project_id/:material_id", projectMaterialController.updateProjectMaterial);
router.delete("/:project_id/:material_id", projectMaterialController.deleteProjectMaterial);

module.exports = router;
