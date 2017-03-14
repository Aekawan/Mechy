const customer = require('express').Router();
const all = require('./all');
const create = require('./create');
const users = require('./users');

customer.get('/', all);
customer.post('/create', create);
customer.get('/:update', users);

module.exports = customer;
