const mongoose = require('mongoose');

const {ProductSchema} = require('../models/products');

//Select type of promise will return mongoose queries;
mongoose.Promise = global.Promise;
//Mongoose configuration
const product_conn = mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost:27017/Products');

const Product = product_conn.model('Product', ProductSchema);

module.exports = {Product};