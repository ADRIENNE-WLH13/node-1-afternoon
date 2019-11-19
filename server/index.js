const express = require('express');
const products = require('../products.json');
const getProducts = require('./getProducts')
// const chalk = require('chalk');


const app = express();

const port = 4000;

app.get('/api/products', getProducts);

app.listen(port, () => {
    console.log(`Server is Golden on port: ${4000}`);
});