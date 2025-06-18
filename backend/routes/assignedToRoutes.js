const express = require("express");
const router = express.Router();
const assignedToController = require("../controllers/assignedToController");

router.get("/", assignedToController.getAllAssignments);
router.get("/:designer_id/:project_id", assignedToController.getAssignment);
router.post("/", assignedToController.assignDesigner);
router.delete("/:designer_id/:project_id", assignedToController.unassignDesigner);

module.exports = router;
