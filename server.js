const express = require('express');

const app = express();
const port = 8000;

app.get('/', function(req, res) {
    return res.end('<h1> Server Running </h1>');
});

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }

    console.log(`App runnig on port : ${port}`);
});