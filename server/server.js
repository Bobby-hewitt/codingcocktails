var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path')

server.listen( process.env.PORT || 3000 );

app.use(express.static('./build', { maxAge: 1 }));

console.log('the server is running ')

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});