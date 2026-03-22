const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const contact = await Contact.create({ name, email, phone, message });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

module.exports = router;
