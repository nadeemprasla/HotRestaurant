//================== MAKE RESERVATION ===========

// Start with an empty array that will contain objects 
// object values will be entered into the dom at id 
// #name
// #date
// #time 
// #phone number
// #email 
// puts into opbject and puts into empty array 
//post/ root itself /in JSON file


// VIEW

// Take array object of posted reservations and print them onto the browser
// Based on a get/ root itself / HTML 
// array.map prototype 


var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080; 

app.use(express.urlencoded({extend: true}));
app.use(express.json());


var demoTable = [
    {
        name: "Name1",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email:"test@test.com"

    },
    {
        name: "Name2",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email:"test@test.com"

    },
    {
        name: "Name3",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email:"test@test.com"

    },
    {
        name: "Name4",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email:"test@test.com"

    },
 
];

// Routes
// ============================================================

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"index.html"));
});
app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname,"view.html"));
});
app.get("/make", function(req, res){
    res.sendFile(path.join(__dirname,"make.html"));
});

app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT);
});