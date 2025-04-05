var express = require("express");
var router = express.Router();
const Habit = require("../models/habit");

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const tokenWithoutBearer = token.replace("Bearer ", "");
    const verify = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = verify;
    next();
  } catch (error) {
    res.status(403).json({ message: "Forbidden" });
  }
};

/* GET home page. */
router.get("/", authenticateToken, function (req, res, next) {
  res.json("index", { title: "Express" });
});

router.post("/habits", authenticateToken, async function (req, res, next) {
  const { title, description } = req.body;
  const habit = new Habit({ title, description });
  await habit.save();
  res.json(habit);
});

router.get("/habits", authenticateToken, async function (req, res, next) {
  const habits = await Habit.find();
  res.json(habits);
});

router.put("/habits/:id", authenticateToken, async function (req, res, next) {
  const { id } = req.params;
  const { title, description } = req.body;
  const habit = await Habit.findByIdAndUpdate(id, { title, description });
  res.json(habit);
});

router.delete("/habits/:id", authenticateToken, async function (req, res, next) {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.json({ message: "Habit deleted" });
});

router.patch("/habits/markasdone/:id", authenticateToken, async function (req, res, next) {
  try {
    const habit = await Habit.findById(req.params.id);
    habit.lastDone = new Date();
    if (timeDifferenceInHours(habit.lastDone, habit.createdAt) < 24) {
      habit.lastUpdated = new Date();
      habit.days = timeDifferenceInDays(habit.lastDone, habit.startedAt);
      habit.save();
      res.status(200).json({ message: "Habit mark as done" });
    } else {
      habit.days = 1;
      habit.lastUpdated = new Date();
      habit.startedAt = new Date();
      habit.save();
      res.status(200).json({ message: "Habit mark as done" });
    }
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: "Error updating Habit" });
  }
});

const timeDifferenceInHours = (date1, date2) => {
  const diffMs = Math.abs(date1 - date2);
  return diffMs / (1000 * 60 * 60);
};
const timeDifferenceInDays = (date1, date2) => {
  const diffMs = Math.abs(date1 - date2);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};
module.exports = router;
