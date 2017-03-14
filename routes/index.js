const routes = require('express').Router();
const customer = require('./customer');
const admin = require('./admin');
const shop = require('./shop');

routes.use('/customer', customer);
routes.use('/admin', admin);
routes.use('/shop', shop);

routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'Wellcome to Mechy Api!'
    });
});

module.exports = routes;
