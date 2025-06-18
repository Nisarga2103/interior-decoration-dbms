require("dotenv").config();
const mysql = require("mysql2");

// ✅ DEBUG: Log environment variables to verify they're loaded correctly
console.log("DB Config:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Chinni@2119",
  database: process.env.DB_NAME || "interior_decoration",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Convert pool to use promises
const db = pool.promise();

// Function to test the database connection (only runs once)
(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ Database connection successful");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // Exit process if DB fails to connect
  }
})();

module.exports = db;
