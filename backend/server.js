// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db"); // MySQL pool with promise support

// Import routes
const customerRoutes = require("./routes/customerRoutes");
const designerRoutes = require("./routes/designerRoutes");
const projectRoutes = require("./routes/projectRoutes");
const materialRoutes = require("./routes/materialRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const assignedToRoutes = require("./routes/assignedToRoutes");
const projectMaterialRoutes = require("./routes/projectMaterialRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/customers", customerRoutes);
app.use("/api/designers", designerRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/assigned-to", assignedToRoutes);
app.use("/api/project-materials", projectMaterialRoutes);

// Default route to check if server is running
app.get("/", (req, res) => {
  res.send("🎨 Interior Decoration API is running...");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server only after confirming DB connection
(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ Connected to MySQL Database");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // Stop server if DB connection fails
  }
})();
