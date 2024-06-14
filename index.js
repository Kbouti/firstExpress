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

// Next we can start the server by calling node index.js
// When we do this we get our message logged to the console, and our page visible at: http://localhost:3000/


// Next up we're askesd to install esLint
// Then we're asked to make a script to make running esLint on our js files easier. I'm not running that code at the moment as the file structure does not seem to match what I have
// Next up is: Installing the Express Application Generator
// npm install express-generator -g

// Ok we did some stuff and I think xpress created a server for us in helloworld?
// Here's the command we ran to activate the server:
// DEBUG=helloworld:* npm start
