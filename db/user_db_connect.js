const mongoose = require('mongoose');

const {UserSchema} = require('../models/user');

//Select type of promise will return mongoose queries;
mongoose.Promise = global.Promise;
//Mongoose configuration
const product_conn = mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost:27017/Users', {}, (err) =>{
    if (err) console.log('Unable to connect with Products database', err);
    console.log('Connected to Users database');
});

const User = product_conn.model('User', UserSchema);

module.exports = {User};