"use strict";


// Django - urls

var express = require("express");
var router = express.Router();


router.get("/", function(res, req) {
    res.send({greeting : 'hello world!'});
    
});

// router.get("/login", ctrl.output.login);
// router.post("/login", ctrl.process.login);


module.exports = router;