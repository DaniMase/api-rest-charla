const mongoose = require('mongoose');

const {WarehouseSchema} = require('../models/warehouse');

//Select type of promise will return mongoose queries;
mongoose.Promise = global.Promise;
//Mongoose configuration
const warehouse_conn = mongoose.createConnection(process.env.MONGODB_WAREHOUSE_URI || 'mongodb://localhost:27017/Warehouse', {}, (err) =>{
    if (err) console.log('Unable to connect with Warehouse database', err);
    console.log('Connected to Warehouse database');
});

const Warehouse = warehouse_conn.model('Warehouse', WarehouseSchema);

module.exports = {Warehouse};