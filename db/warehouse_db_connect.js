const mongoose = require('mongoose');

const {WarehouseSchema} = require('../models/warehouse');

//Select type of promise will return mongoose queries;
mongoose.Promise = global.Promise;
//Mongoose configuration
const warehouse_conn = mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost:27017/Warehouse')

const Warehouse = warehouse_conn.model('Warehouse', WarehouseSchema);

module.exports = {Warehouse};