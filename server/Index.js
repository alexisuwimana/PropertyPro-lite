const express = require('express');
const properties = require('./routes/properties');

const app = express();

app.use(express.json());

app.use('/api/properties', properties);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;