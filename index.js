const express = require("express");
// First we import (require) the express module
const app = express();
// Then we use it to create a server (app)
const port = 3000;
// Which listens for requests on port 3000 and responds explaining what browser URL you can use to test the server

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}!`);
});