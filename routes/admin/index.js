const admin = require('express').Router();
const all = require('./all');
const create = require('./create');

admin.get('/', all);
admin.post('/create', create);

module.exports = admin;
