const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET /items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /items
// router.post('/', async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     if (!name || !description) return res.status(400).json({ error: 'All fields required' });

//     const item = new Item({ name, description });
//     const saved = await item.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
router.post('/', async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const item = new Item({ name, description });

    console.log("ITEM BEFORE SAVE:", item);

    const saved = await item.save();

    console.log("SAVED ITEM:", saved);

    res.status(201).json(saved);

  } catch (err) {
    console.error("SAVE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// PUT /items/:id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Item not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;