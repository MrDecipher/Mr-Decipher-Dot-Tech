const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../production")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../production/Home.html"));
});

/*eslint-disable no-console*/
app.listen(port, () => {
    console.log("Development server is listening on port: " + port);
});
