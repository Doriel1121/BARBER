const res = require("express/lib/response");
const { json } = require("express/lib/response");
const mongo = require('mongoose');
const Barbers = require("./models/Barbers");
const Clients = require("./models/Clients");
const Options = require('./models/Options')
const Schedule = require('./models/Schedule')
const Order = require('./Order')



exports.getClient = async (req , res, callback) =>{
    console.log(req);
    try{
        const clients = await Clients.find({Phone: req.phone , Name: req.name});
        console.log('shit');
        console.log(clients);      
        if (clients.length == 0) {
            console.log('empty');
            callback(false);
        }else{
            console.log('not empty');
            callback(true);
        }
    }
    catch {
        error => {
            res.json({message: error})
        }
    }
}

exports.getClientOrders = async (req , res, callback) =>{
    console.log(req);
    try{
        console.log(req);
        const clients = await Schedule.find({Phone: req.phone , Name: req.name});
        console.log(clients);        
        if (clients.length == 0) {
            callback(false);
        }else{
            callback(true);
        }
    }
    catch {
        error => {
            res.json({message: error})
        }
    }
}