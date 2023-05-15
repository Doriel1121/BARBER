const mongoose = require('mongoose');

const OptionsScheme = mongoose.Schema({
    Name: String,
    Price: String,
    barberId: String
})

module.exports = mongoose.model('Options' , OptionsScheme);