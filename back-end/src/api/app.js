const express = require('express');
const cors = require('cors');
const LoginRouter = require('../routes/LoginRouter');
  
const app = express();      
app.use(cors()); 
const RegisterRouter = require('../routes/RegisterRouter'); 
const ProductsRouter = require('../routes/ProductsRouter');
const CheckoutRouter = require('../routes/CheckoutRouter');

app.use(express.json()); 
app.use(express.static('public'));  

app.use('/login', LoginRouter);
app.use('/register', RegisterRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/products', ProductsRouter);
app.use('/checkout', CheckoutRouter);
  
module.exports = app;
