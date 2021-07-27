const express = require('express');

// recordRoutes is an instance of the express Router.
// We use it to define our routes.
// The router will be added as middleware and will take control of requests starting with the path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

//This section will help you get a list of all the recrords.
recordRoutes.route('/record').get(function (req, res) {
    let db_connect = dbo.getDb("employees");
    db_connect
        .collection("records")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record
recordRoutes.route("/update/:id").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
    let myquery = { id: req.body.id };
    let newvalues = {
        $set: {
            person_name: req.body.person_name,
            person_position: req.body.person_position,
            person_level: req.body.person_level,
        },
    };
    db_connect
        .collection("records")
        .updateOne(myquery, newvalues, function (err, result) {
            if (err) throw err;
            console.log("1 document updated");
        });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
    let db_connect = dbo.getDb("employees");
    let myquery = { id: req.body.id };
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
    });
});

module.exports = recordRoutes;