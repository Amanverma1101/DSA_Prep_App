const express = require('express')
const app = express()
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "application/json" }));

app.get('/', (req, res) => {
  res.render("index");
})
app.get('/auth', (req, res) => {
  res.render("auth");
})
app.get('/dates', (req, res) => {
  res.render("dates");
})
app.get('/question', (req, res) => {
  fs.readFile(__dirname + '/public'+"/dsa450.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const question = JSON.parse(jsonString);
      let data = question.Sheet1;
      // console.log(data);
      return res.render("tables",{data:data});
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
})
app.get('/section', (req, res) => {
  fs.readFile(__dirname + '/public'+"/dsa450.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const question = JSON.parse(jsonString);
      let data = question.Sheet1;
      // console.log(data);
      return res.render("section",{data:data});
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
})
app.get('/section/:id',(req,res)=>{
  let topic = req.params.id;
  fs.readFile(__dirname + '/public'+"/dsa450.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const question = JSON.parse(jsonString);
      let data = question.Sheet1;
      // console.log(data);
      let qset=[];
      data.forEach(element => {
        if(element.Topic===topic){
          qset.push(element);
        }
      });
      // console.log(qset);
      return res.render("tables",{data:qset});
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });

});
app.listen(PORT, () => {
    console.log(`port is running successfully at server ${PORT} !`);
  });






