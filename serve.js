var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.static(__dirname));

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
