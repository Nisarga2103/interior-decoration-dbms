const express = require("express");
const router = express.Router();
const designerController = require("../controllers/designerController");

// Use controller methods here — no DB query directly in the route

router.get("/", designerController.getAllDesigners);
router.get("/:id", designerController.getDesignerById);
router.post("/", designerController.createDesigner);
router.put("/:id", designerController.updateDesigner);
router.delete("/:id", designerController.deleteDesigner);

module.exports = router;
