//require module
const app = require('express')();
const bodyParser = require('body-parser');
const admin = require("firebase-admin");
const routes = require('./routes');
const firebase = require('./app/firebase/firebase');
const mongodb = require('./app/mongodb/mongodb');
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/', routes);

// Turn on that server!
app.listen(port, () => {
    console.log('App listening on port 8080');
});
