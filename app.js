const express = require("express");
const app = express();

app.use(express.static('views'));

app.listen(5000, (req, res) => {
    console.log("Express is running on port 5000");
})