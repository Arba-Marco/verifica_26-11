
var express = require('express');
var app = express(); 
const path = require('path');
app.use(express.static(path.join(__dirname, 'www')));

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, '/www/index.html')); //__dirname : Ritorna la cartella del progetto
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  
});
const fs = require ('fs');
app.get('/api/mante', (req, res) => {
  const manteData = require('./api/mante.json'); 
  res.json(manteData);
});
