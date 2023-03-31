const express = require('express');
const cors = require('cors');
const LoginRouter = require('../routes/LoginRouter');
  
const app = express(); 
app.use(cors()); 
const RegisterRouter = require('../routes/RegisterRouter');


app.use(express.json()); 

app.use('/login', LoginRouter);
app.use('/register', RegisterRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
