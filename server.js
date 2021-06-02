// require express library from package.json
const express = require('express');

// create an express app
const app = express();

// define port no on which you need to run application
const port = process.env.PORT || 4000;

// import routers here
const routers = require('./routers/index');

// merger database to express server from config file
const db = require('./config/mongoose');

// Set up the View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));

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
