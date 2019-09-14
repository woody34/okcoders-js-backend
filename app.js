var express = require('express');
var app = express();
var port = 3000;

app.get('/helloWorld', function(req,res){
	res.send('Hello World!');
})


app.listen(port, function(){
	console.log('Express is running on port ' + port);
})