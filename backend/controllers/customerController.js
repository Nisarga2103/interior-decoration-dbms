const db = require("../db");

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM customers");
    res.json(results);
  } catch (err) {
    console.error("❌ DB error in getAllCustomers:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM customers WHERE customer_id = ?", [req.params.id]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const [results] = await db.query(
      "INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)",
      [name, email, phone, address]
    );
    res.status(201).json({ message: "Customer added", id: results.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    await db.query(
      "UPDATE customers SET name = ?, email = ?, phone = ?, address = ? WHERE customer_id = ?",
      [name, email, phone, address, req.params.id]
    );
    res.json({ message: "Customer updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
  try {
    await db.query("DELETE FROM customers WHERE customer_id = ?", [req.params.id]);
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
