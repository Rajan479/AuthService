const express = require('express');
const { PORT } = require('./config/serverConfig.js');

const app = express();

const prepareAndStartServer = function(){
    app.listen(PORT, function(){
        console.log(`Server started on ${PORT}`);
    })
};

prepareAndStartServer();