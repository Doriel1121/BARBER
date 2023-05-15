const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const HChecker = require('./HolidayChecker')
const Barber = require('./models/Barbers')
const mongo = require('mongoose');
const PORT = 3001;
const Barbers = require('./Barbers');
const Clients = require('./Clients')
const app = express();


app.listen(PORT , console.log(`server is running on port ${PORT}`));

mongo.connect("mongodb+srv://winner:Dor0305@barberapp.tsqai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" , (res)=> {
})
mongo.connection.on('open', function (ref) {
    console.log('Connected to mongo server.')
});

app
  .use(bodyParser.json())
  .use(cors())
app.get('/getUserInfo/:phone/:name' , (req , res) => {
    console.log('here');
    Clients.getClient(req.params , res , isClientExist => {
        console.log(isClientExist);
        res.send(isClientExist);
    }
)
})

app.get('/getBarbersList' , (req , res) => {
    Barbers.getBarbers(req.body , res , allBarbers => {
        res.send(allBarbers);
    }
)})

app.post('/getClientOrders' , (req , res) => {
    Clients.getClientOrders(req.body , res , clientOrders => {
        res.send(clientOrders);
    }
)})

app.get('/getBarberOptions/:id' , (req , res) => {
    Barbers.getBarberOptions(req.params.id , res , options => {
        res.send(options);
    });
})

app.post('/getBarberSchedule' , (req , res) => {
    Barbers.getBarberSchedule(req.body , res , schedule => {
        res.send(schedule);
    });
})

app.post('/setOptionToBarber' , (req , res) => {
    Barbers.setOptionsToBarber(req.body , res , answer => {
        res.send(answer);
    }); 
})

app.post('/setBarberSchedule' , (req , res) => {
    Barbers.setBarberSchedule(req.body , res , answer => {
        res.send(answer);
    }); 
})

let dat = new Date();
dat.setDate(dat.getDate() + 30);
console.log(dat.toISOString().split('T')[0]);
