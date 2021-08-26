const express = require('express');
const path = require('path');
const app = express();


const http = require('http').createServer(app);
http.listen(8080, function () {
    console.log('listening in 8080');
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response){
    request.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/*', function(request, response){
    request.sendFile(path.join(__dirname, 'dist/index.html'));
});