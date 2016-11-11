var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var request = require('request');

var router = express.Router();


//get user prof from database 
router.route('/user')
.get(function(req, res) {

});

//send to conf page
router.route('/confirmation')
.get(function(req, res) {

});

//make them trades
router.route('/trades')
.post(function(req, res) {

});

//login
router.route('/login')
.post(function(req, res) {

});


module.exports = router;
