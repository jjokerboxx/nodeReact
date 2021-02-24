"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = 3001;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json())
const api = require('./routes/index');


// app.use('/api', api);
app.use('/api', (req, res) => res.json({check:"After", selection : "Selected"}));

//Server operating code
app.listen(PORT, () => {
    console.log(`server online : port is ${PORT}`);
})