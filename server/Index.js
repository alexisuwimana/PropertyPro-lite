const bodyParser = require('body-parser');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const properties = require('./routes/properties');
const users = require('./routes/users');
const home = require('./routes/home');
const express = require('express');
const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //unidefined
// console.log(`app: ${app.get('env')}`);
 
// app.set('view engine','pug');


app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(express.static('public'));
app.use(helmet());

console.log('Application name: ' + config.get('name'));
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enable ...');
}

app.use(logger);
app.use('/api/properties', properties);
app.use('/api/users', users);
app.use('/', home);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;