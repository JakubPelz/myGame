const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.render('Hlavní stránka');
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});