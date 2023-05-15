
// const Schedule = require('./models/Schedule')
// const Barber = require('./models/Barbers')




// exports.createOrder = (barberId) => {

//     // console.log(barberId);
//     let date = new Date();
//     let barbers = Barber.find();
//     const orders = [{hour:10 , minuts:00} ,{hour:10 , minuts:20} ,{hour:10 , minuts:40} ,{hour:11 , minuts:00} ,{hour:11 , minuts:20} ,{hour:11 , minuts:40} ,{hour:12 , minuts:00},
//         {hour:12 , minuts:20} ,{hour:12 , minuts:40} ,{hour:13 , minuts:00} ,{hour:13 , minuts:20} ,{hour:13 , minuts:40} ,{hour:14 , minuts:00} ,{hour:14 , minuts:20} , 
//         {hour:14 , minuts:40} ,{hour:15 , minuts:00} ,{hour:15 , minuts:20} ,{hour:15 , minuts:40} ,{hour:16 , minuts:00} ,{hour:16 , minuts:20} ,{hour:16 , minuts:40} , 
//         {hour:17 , minuts:00} ,{hour:17 , minuts:20} ,{hour:17 , minuts:40} ,{hour:18 , minuts:00} ,{hour:18 , minuts:20} ,{hour:18 , minuts:40} ,{hour:19 , minuts:00} ]
//     let mins = 00 , hours = 10;
//     let hour;
//     let thirtyDaysInMs , milliseconds , dateObject;

//     //creating empty orders for the next 30 days for each barber
//     for (let i = 1; i <= 30; i++) {
//         const iteration = i;
//         thirtyDaysInMs = iteration * 24 * 60 * 60 * 1000;
//         milliseconds = date.getTime() + thirtyDaysInMs // 1575909015000
//         dateObject = new Date(milliseconds)
//         let humanDateFormat = dateObject.toLocaleDateString(); //2019-12-9 10:30:15
//         // if (iteration == 1) {
//         //     date.setHours(13);            
//         // }
//         // date.setMinutes(mins);
//         // date.setSeconds(00);
//         date.toLocaleTimeString();
//         // console.log("date:" + humanDateFormat);

//         // console.log(date);
        
//         for (let j = 0; j < orders.length; j++) {
//             // console.log("1");
//             const day = orders[j];
//             // console.log("day:" + day);
//             let fullTime = day.hour+':'+day.minuts;
//             let temp = Schedule.find({barberId : barberId , Date: humanDateFormat , Hour: fullTime}).lean().exec(function (err, docs) {
//                 docs= docs.map(o => o.toObject());
//                 // console.log(docs);
//             });
//             // console.log(temp);
//             // console.log("2");
//             // console.log("barberid:" + barberId + "---" + "date:" + humanDateFormat + "----" + "hour:" + fullTime);
//             if (!Schedule.find({barberId : barberId , Date: humanDateFormat , Hour: fullTime})) {
//                 // console.log("in");
//                 const BarberSchedule = new Schedule({
//                     Date: humanDateFormat,
//                     Hour: day.hour,
//                     Name: '',
//                     Age: '',
//                     Phone: '',
//                     Price: '',
//                     Status: '',
//                     barberId: ''
//                 });
//                 BarberSchedule.save()
//             }
        
            
//         }

     
//     }

// }
