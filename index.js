var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var server = express();
var tradesRouter = require('./routes/tradesRouter.js')
var userRouter = require('./routes/userRouter.js')
var confirmationRouter = require('./routes/confirmationRouter.js')

server.set('port', (5000) );

mongoose.connect('mongodb://localhost/barterApp');

server.listen(server.get('port'), function () {
  console.log('BarterApp server listening on port 5000');
});

server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: true })); 
server.use(express.static(__dirname + '/client'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));

server.use('/api/trades', tradesRouter);
server.use('/api/user', userRouter);
server.use('/api/confirmation', confirmationRouter);

module.exports = server;
