const express = require('express');
const path = require('path');
const axios = require('axios').default;
const bodyParser = require('body-parser');
const { correctTitle, searchSWAPI, wookieSearchSWAPI } = require('./routes/search.js');


const PORT = process.env.PORT || 8006;

const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/search/:movie', correctTitle, searchSWAPI)
app.get('/api/wookie-search/:movie', correctTitle, wookieSearchSWAPI)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})