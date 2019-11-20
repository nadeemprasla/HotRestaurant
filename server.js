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

app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static('public'))


var demoTable = [{
        name: "Name1",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email: "test@test.com"

    },
    {
        name: "Name2",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email: "test@test.com"

    },
    {
        name: "Name3",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email: "test@test.com"

    },
    {
        name: "Name4",
        date: "DD/MM/YYYY",
        time: "HH:MM",
        phoneNumber: "5555555555",
        email: "test@test.com"

    },

];
// Routes
// ============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "public/view.html"));

});
app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "public/make.html"));
});
app.get("/api/table", function(req, res){
    res.json(demoTable);
});
app.get("/make", function(req, res){
    res.sendFile(path.join(__dirname,"make.html"));
});


app.post("/add", function(req, res) {
    console.log(req.body)

    if (req.body.name && req.body.date && req.body.time && req.body.phoneNumber && req.body.email) {

        demoTable.push(req.body)
        console.log(demoTable)
        res.sendFile(path.join(__dirname, "make.html"));
    }
})




app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT);
});