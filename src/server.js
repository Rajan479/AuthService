const express = require('express');
const bodyParser = require('body-parser'); 
const apiRoutes = require('./routes/index.js');
const { PORT } = require('./config/serverConfig.js');
const db = require('./models/index.js');

const app = express();

const prepareAndStartServer = function(){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true}));
    app.use('/api', apiRoutes);

    app.listen(PORT, function(){
        console.log(`Server started on ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({ alter: true });
        }
    })
};

prepareAndStartServer();