const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  type: {
    type: String
  },

  name: {
    type: String
  },

  duration: {
    type: Number
  },

  weight: {
    type: Number
  },

  reps: {
    type: Number
  },

  sets: {
    type: Number
  }

});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;
