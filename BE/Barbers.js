const { call } = require("body-parser");
const res = require("express/lib/response");
const { json } = require("express/lib/response");
const mongo = require('mongoose');
const Barbers = require("./models/Barbers");
const Clients = require("./models/Clients");
const Options = require('./models/Options')
const Schedule = require('./models/Schedule')
const Order = require('./Order')


let BarbersTimeList = [];



exports.getBarbers = async (req , res, callback) =>{
    console.log("here");
    try{
        const barbers = await Barbers.find();
        callback(barbers);
        res.json(barbers);
    }
    catch {
        error => {
            res.json({message: error})
        }
    }
}

exports.getBarberOptions= async (barberId , res , callback) => {
    try{
        const options = await Options.find({barberId : barberId});
        console.log(options);
        callback(options);
        res.json(options);
    }catch{
        error => {
            res.json({message: error})
        }
    }
}

exports.getBarberSchedule= async (data , res , callback) => {

    try{
        console.log('doriel is testing');
        console.log(data);
        const schedule = await Schedule.find({barberId : data.barberId , Date: data.Date}).lean()
        // console.log(JSON.stringify(schedule));
        const list = schedule;
        let filtered;
        // for(let i = 0; i < list.length; i++) {
        //     const element = list[i];
            filtered =  await getListOfAvaliableTime(list , data);
        // }
console.log('doriel1');
        console.log(filtered);
        const result = await checkAndAddSchedule(filtered , list , data);
        console.log(result);
        res.json(result);
        BarbersTimeList = result;
        callback(result);          
        
    }catch{
        error => {
            res.json({message: error})
        }
    }
}

// exports.setOrder = (data, res , callback) =>{
//     const BarberInfo = new Barber({
//         Name: data.Name,
//         Phone: data.Phone,
//         Price: data.Price
//     });
//     BarberInfo.save()
//     .then(data => {
//         console.log("1");
//         res.json(data);
//     }).catch((error) => {
//         console.log("2");
//         callback(error);
//     });
// }

exports.setOptionsToBarber = (data, res , callback) =>{
    console.log("optin");
    const BarberOption = new Options({
        Name: data.Name,
        Price: data.barberId,
        barberId: data.barberId
    });
    BarberOption.save()
    .then(data => {
        res.json(data);
    }).catch((error) => {
        callback(error);
    });
}

exports.setBarberSchedule = (data, res , callback) =>{
    console.log("schedule");
    const BarberSchedule = new Schedule({
        Date: data.date,
        Hour: data.hour,
        Name: data.name,
        Phone: data.phone,
        barberId: data.barberId
    });
    BarberSchedule.save()
    .then(data => {
        res.json(BarbersTimeList);
    }).catch((error) => {
        callback(error);
    });
}

getListOfAvaliableTime = (list , sch) => {
    const listOfDates = [];
    let ourList = list.length > 0 ? list : [sch];
    if (ourList.length > 0) {
        for (let i = 0; i < ourList.length; i++) {
            const element = ourList[i];
            console.log(element.Date);
            console.log('sdsdsdsaddd');
            const year = new Date(element.Date).getFullYear();
            const month = new Date(element.Date).getMonth() + 1;
            const day = new Date(element.Date).getDate();
            listOfDates.push({day,month,year})
        }        
    }

    return listOfDates
    // console.log(e);

    // const SpecificDate = `${month}/${day}/${year}`;
    
}


checkAndAddSchedule = (list , occupied , data) => {
    console.log(list);
    let listOfAvaliableHours = []
    let currentList = list.length > 0 ? list : [data]
    let time=new Date(list[0].year , list[0].month , list[0].day , 10);
    while (time <= new Date(list[0].year , list[0].month , list[0].day , 20)) {
      listOfAvaliableHours.push(new Date(new Date(time).getTime()).toTimeString().slice(0 , 5));
      time = new Date(new Date(time).getTime() + 20*60000);
    }
    console.log(listOfAvaliableHours);
    console.log('ggggggg');
    let filteredList = [];
    const newArr = [];
    filteredList  = listOfAvaliableHours.filter(function(array_el){
        return occupied.filter(function(anotherOne_el){
           return anotherOne_el.Hour === array_el;
        }).length == 0
     });
    console.log(filteredList);

    return filteredList;
    
}




