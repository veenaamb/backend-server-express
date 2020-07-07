const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log("Server 3000 listening");
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
  var result = Number(req.body.num1) + Number(req.body.num2);
  res.send("Thanks for posting that. Keep going! " + result);
  // console.log(typeof(req.body.num1));
  // console.log(Number(req.body.num1)+ Number(req.body.num2));
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+ "/bmicalCulator.html");
});

app.post("/bmicalculator", function(req, res){
  w = parseFloat(req.body.weight);
  h = parseFloat(req.body.height);
  var bmi = w / Math.pow(h, 2);
  res.send("your bmi is "+ bmi);
});
