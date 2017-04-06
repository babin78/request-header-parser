var express=require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app=express();
//var methodoverride=require('method-override');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/',function(req,res){
    
    console.log(req.headers);
    var output={};
    output.language=req.headers['accept-language'];
    output.IP=req.headers['x-forwarded-for'];
    output.OS=req.headers['user-agent'];
    
    
    res.send(JSON.stringify(output));
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log('I am running');
});