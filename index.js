const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
require('dotenv').config();

const morgan = require('morgan')

app.use(morgan('combined'))

mongoose.connect(process.env.MONGO_URL)
.then(console.log("connected to mongoDB"))
.catch((err)=>console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}...`)
})