var express = require('express');
var ejs = require('ejs');
var path = require('path');



var app = express()
app.set('view engine', 'ejs');
app.use('/views', express.static(path.join(__dirname, 'views')))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/:date', function(req, res){
    var date1;
    
    //catch unix time and modify for javascript date object.
    if(req.params.date.match(/[a-z]/i)){
        date1 = new Date(req.params.date);
    }
    else{
        date1 = new Date(req.params.date*1000);
    }
 
    
    //catch nondates
    if(isNaN(date1)){
        res.send(JSON.stringify({"unix": null, "natural": null}));
    }
    

    //find natural language month
    function monthName(a){
      var months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
      return months[a];
    }
    
    //create natural language date
    var nlDateArr = [];
    var nlDate = date1;
    nlDateArr.push(monthName(nlDate.getMonth()) + ' ');
    nlDateArr.push(nlDate.getDay() + ', ')
    nlDateArr.push(nlDate.getFullYear());
    nlDateArr = nlDateArr.join('');
   
   //return obj
    var date = {

        "unix": date1.getTime(),
        "natural": nlDateArr
    }
        
    
    
    
    res.send(JSON.stringify(date));
})

app.listen(8080, function () {
  console.log('listening on port 8080!')
})