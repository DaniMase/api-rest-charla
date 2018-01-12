const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const {products_router} = require('./routes/product-routes');
const {warehouse_router} = require('./routes/warehouse-routes');
const {user_routes} = require('./routes/user-routes');

let app = express();
const port = process.env.PORT || 8080;

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})


app.use(morgan('common', {stream: accessLogStream}));

app.use(bodyParser.json());
app.use(products_router);
app.use(warehouse_router);
app.use(user_routes);

//Config to start the server
app.listen(port, () => {
   console.log(`Started at port ${port}`);
});