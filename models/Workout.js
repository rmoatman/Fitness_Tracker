const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Select the type of exercise.',
      },
    
      name: {
        type: String
      },
    
      duration: {
        type: Number,
        required: 'Enter the duration in minutes.',
      },

      distance: {
        type: Number,
        required: 'Enter the distance in miles.',
      },
    
      weight: {
        type: Number,
        required: 'Enter the weight in pounds.',
      },
    
      reps: {
        type: Number,
        required: 'Enter the number of reps.',
      },
    
      sets: {
        type: Number,
        required: 'Enter the number of sets.',
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
