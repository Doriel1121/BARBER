const mongoose = require('mongoose');

const BarbersScheme = mongoose.Schema({
    Name: String,
    Phone: String,
    Price: String
})

module.exports = mongoose.model('Barbers' , BarbersScheme);