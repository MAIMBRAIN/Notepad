// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Start express app
var app = express();

// Set Localhost Port
var PORT = process.env.PORT || 8080;

// Setup express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes

// Home Page Route
app.get("/", function(req, res)
{
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Notes Page Route
app.get("/notes", function(req, res)
{
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// API Routes

// GET
app.get("/api/notes", function(req, res)
{

});

// Start the server
app.listen(PORT, function()
{
    console.log("App listening on localhost:" + PORT);
})