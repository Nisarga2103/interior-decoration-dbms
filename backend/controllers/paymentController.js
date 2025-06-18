const Payment = require("../models/Payment");

exports.getAllPayments = async (req, res) => {
  try {
    const results = await Payment.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const result = await Payment.getById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const result = await Payment.create(req.body);
    res.status(201).json({ message: "Payment added", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    await Payment.update(req.params.id, req.body);
    res.json({ message: "Payment updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    await Payment.delete(req.params.id);
    res.json({ message: "Payment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
