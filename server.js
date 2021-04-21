var proxy = require('express-http-proxy');

var cors=require("cors")
var app = require('express')();
app.use(cors())

app.use(proxy('https://secure-1.awdrgyjil1234.repl.co'))
/*
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
