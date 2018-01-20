const express = require('express');
const login = require('./routes/loginrouts');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept");
    next();
});

const router = express.Router();

// test route
router.get('/', function(req,res){
    res.json({message: 'welcome to our upload module apis'});
});