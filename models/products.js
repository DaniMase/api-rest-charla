const mongoose = require('mongoose');

//Product model
let ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    },
    warehouse: { type: mongoose.Schema.ObjectId, ref: 'Warehouse', required: true},
    provider: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastUpdate: {
        type: Number,
        default: new Date().getTime()
    }
},
    {
        versionKey: false
    },
    {
    usePushEach: true
});

module.exports = {ProductSchema};