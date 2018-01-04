
var express = require('express');
var app = express();


app.get("/", function (request, response) {
  var ipaddress = request.headers["x-forwarded-for"].split(',')[0];
  var language = request.headers["accept-language"].split(',')[0];
  var software = request.headers["user-agent"];
  software = software.slice(software.indexOf('(') + 1, software.indexOf(')'));
  var headers = {
    ipaddress,
    language,
    software
  };
  response.json(headers);
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
