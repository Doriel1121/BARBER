const mongoose = require('mongoose');

const ClientsScheme = mongoose.Schema({
    _id: Object,
    Name: String,
    Phone: String
})

module.exports = mongoose.model('Clients' , ClientsScheme);