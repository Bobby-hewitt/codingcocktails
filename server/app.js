const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
app.use(express.static('./build', { maxAge: 1 }));



module.exports = app;