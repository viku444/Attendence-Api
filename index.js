const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();


const app = express();

mongoose.connect(process.env.MONGO_DB_URL)
app.get('/users', (req, res) => {
    res.json({
        "name": "Vikash Kuamar",
    })
})

app.listen(3301, () => {
    console.log('Server is  Running');
})