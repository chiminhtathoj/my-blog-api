const express = require("express");
const app = express();

const PORT = 5000;
console.log("test cai")

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}...`)
})