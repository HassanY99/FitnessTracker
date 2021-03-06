const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        default: 0,
        trim: true,
      },
      reps: {
        type: Number,
        default: 0,
        trim: true,
      },
      sets: {
        type: Number,
        default: 0,
        trim: true,
      },
      distance: {
        type: Number,
        default: 0,
        trim: true,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
