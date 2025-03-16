var express = require("express");
var router = express.Router();
const Habit = require("../models/habit");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/habits", async function (req, res, next) {
  const { title, description } = req.body;
  const habit = new Habit({ title, description });
  await habit.save();
  res.json(habit);
});

router.get("/habits", async function (req, res, next) {
  const habits = await Habit.find();
  res.json(habits);
});

router.put("/habits/:id", async function (req, res, next) {
  const { id } = req.params;
  const { title, description } = req.body;
  const habit = await Habit.findByIdAndUpdate(id, { title, description });
  res.json(habit);
});

router.delete("/habits/:id", async function (req, res, next) {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.json({ message: "Habit deleted" });
});

module.exports = router;
