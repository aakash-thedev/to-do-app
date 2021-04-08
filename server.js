const express = require('express');

const app = express();
const port = 8000;

// import routers here
const routers = require('./routers/index');

// Set up the View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

// To access Static files such as JS/CSS/IMAGES :
app.use('*/assets', express.static(__dirname + '/assets'));

// Transfer requests to routers
app.use('/', routers);

// Fire up the server
app.listen(port, function(err){

    if(err){
        console.log(`Error : ${err}`);
        return;
    }

    console.log(`App runnig on port : ${port}`);
});