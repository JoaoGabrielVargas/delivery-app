const express = require('express');
const cors = require('cors');
const LoginRouter = require('../routes/LoginRouter');
  
const app = express();      
app.use(cors()); 
const RegisterRouter = require('../routes/RegisterRouter'); 
const ProductsRouter = require('../routes/ProductsRouter');
const AdmRegisterRoute = require('../routes/AdmRegisterRoute');

app.use(express.json()); 
app.use(express.static('public'));   
 
app.use('/login', LoginRouter);
app.use('/register', RegisterRouter);
app.use('/admin/manage', AdmRegisterRoute);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/products', ProductsRouter);
  
module.exports = app;
