const mongoose = require('mongoose');

//status: 0 = taken  1 = free
const BarberScheduleScheme = mongoose.Schema({
    Date: String,
    Hour: String,
    Name: String,
    Age: Number,
    Phone: String,
    Price: String,
    Status: Number,
    barberId: String
})

module.exports = mongoose.model('Schedule' , BarberScheduleScheme);