const db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // enter new workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then((dbWorkout) => {
                res.json(dbWorkout);
            }).catch(err => {
                res.status(400).json(err);
            });
    });




}