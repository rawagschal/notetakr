const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// parse all client string/array data
app.use(express.urlencoded({extended:true}));
// parse json
app.use(express.json());
// allow access to front-end files
app.use(express.static('public'));
// access routes
app.use('/api', apiRoute);
app.use('/', htmlRoute);

// server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
