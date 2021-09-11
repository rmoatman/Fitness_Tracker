const db = require("../models/Workout");

module.exports = function(app) {

    // finds all workouts if any
    app.get('/api/workouts', (req, res) => {
        db.aggregate([
          {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
              totalDistance: {
                $sum: '$exercises.distance'
              }
            },
          },
        ]).then(dbWorkout => {
            res.json(dbWorkout);
            })
          .catch(err => {
            res.status(400).json(err);
          });
    });

    // create new workout
    app.post("/api/workouts", (req, res) => {
        db.create({})
            .then((dbWorkout) => {
                res.json(dbWorkout);
            }).catch(err => {
                res.status(400).json(err);
            });
    });

    // add exercise to lastWorkout (new or existing)
    app.put("/api/workouts/:id", ({body, params}, res) => {
        db.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body }},

        ).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.aggregate([
            {
                $addFields: {
                    totalDuration: {
                      $sum: '$exercises.duration',
                    },
                    totalDistance: {
                      $sum: '$exercises.distance'
                    }
                },
            }
        ]).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });

}
