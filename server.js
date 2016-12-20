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
    
        var data = {
            'ipaddress' : req.headers['x-forwarded-for'],
            'language' : req.headers['accept-language'],
            'software' : req.headers['user-agent']
            
        }
    
    res.send(data);
})

app.listen(process.env.PORT || 80, function () {
  console.log('listening on port 8080!')
})