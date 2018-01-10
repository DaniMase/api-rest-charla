const express = require('express');
const bodyParser = require('body-parser');

const {router} = require('./routes/product-routes');
const {warehouse_router} = require('./routes/warehouse-routes');

let app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(router);
app.use(warehouse_router);

//Config to start the server
app.listen(port, () => {
   console.log(`Started at port ${port}`);
});