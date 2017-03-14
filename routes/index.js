const routes = require('express').Router();
const customer = require('./customer');
const admin = require('./admin');

routes.use('/customer', customer);
routes.use('/admin', admin);
routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'Wellcome to Mechy Api!'
    });
});

module.exports = routes;
