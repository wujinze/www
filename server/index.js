var express=require('express');
var app = express();
var path = require('path');
var http = require('http');

var base = __dirname + '/../';
var libPath = base + 'lib/';
var appPath = base + 'modules/';

app.use('/',express.static(base + 'platform'));
app.use('/lib',express.static(libPath));
app.get('/module/:module/*',function (req,res) {
    var paths = req.originalUrl.split('?')[0].split('/');
    paths[1] = 'modules';
    res.sendFile(path.resolve(base+paths.join('/')));
});
app.get('*',function(req,res){
    res.sendFile(path.resolve(__dirname + '/../platform/index.html'));
});

var server = app.listen(803);
server.on('error',function(e){
    console.error(e);
})