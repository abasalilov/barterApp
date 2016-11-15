var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var server = express();
var tradeController = require('./backEnd/controllers/tradeController.js');
var tradesRouter = require('./backEnd/routers/tradesRouter.js')
var userRouter = require('./backEnd/routers/userRouter.js')
var confirmationRouter = require('./backEnd/routers/confirmationRouter.js')
var userRouter = require('./backEnd/routers/userRouter.js')
server.set('port', (5000) );

server.get('/api/trade/getTrade', tradeController.getTrade);
// server.post('/api/trade/getTrade', tradeController.makeTrade);

mongoose.connect('mongodb://localhost/barterApp');

server.listen(server.get('port'), function () {
  console.log('BarterApp server listening on port 5000');
});

server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: true })); 

server.use(express.static(__dirname + '/client'));
//giving me an error with bower
server.use('/bower_components', express.static(__dirname + '/bower_components'));

server.get('/api/trades', tradesRouter);
server.post('/api/login', userRouter.login);
// server.get('/api/user/signin', userRouter.login);
server.get('/api/confirmation', confirmationRouter.confirmationRouter);

module.exports = server;
