const mongoose = require('mongoose');

//Product model
let WarehouseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastUpdate: {
        type: Number,
        default: new Date().getTime()
    }
});

WarehouseSchema.statics.findByName = function(name) {
    return this.find({name});
};

module.exports = {WarehouseSchema};