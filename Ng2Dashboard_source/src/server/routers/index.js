var express = require('express');
var User = require('../models/user');
var router = express.Router();

//Mongoose
router.post('/', function(req,res,next){
    var newUser = User({
            username: 'starlord55',
            password: 'password'
    });

    console.log(req)
    newUser.save(function(err) {
        if (err) throw err;
        console.log('User created!');
    });
    
    console.log('da post data')
});

module.exports =router;