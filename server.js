var express = require('express');
var ejs = require('ejs');
var path = require('path');



var app = express()
app.set('view engine', 'ejs');
app.use('/views', express.static(path.join(__dirname, 'views')))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/api/whoami', function(req, res){
    
        
    
    
    
    res.send('test');
})

app.listen(process.env.PORT || 80, function () {
  console.log('listening on port 8080!')
})