const shop = require('express').Router();

const create = require('./create');
const all = require('./all');


shop.post('/create', create);
shop.get('/', all);


module.exports = shop;
