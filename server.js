'use strict'

const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Tells express to serve files from the public folder
app.use(express.static('./public'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));