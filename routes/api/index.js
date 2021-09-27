const router = require("express").Router();
const db = require("../../models");

// GET /api/workouts
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      workouts.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT api/workouts
router.put("/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST api/workouts

router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET api/workouts/range

router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
