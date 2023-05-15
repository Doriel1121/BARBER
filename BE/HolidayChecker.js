const Holiday = require('date-holidays')

const currentDate = new Date();
// console.log(currentDate.getFullYear());
var hd = new Holiday('IL')
const yearHolidays = hd.getHolidays(currentDate.getFullYear());
// console.log(yearHolidays);


exports.isHolidayOrWeekend = (date) =>{
    let currentDate =date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    for (let i = 0; i < yearHolidays.length; i++) {
        const hdDate = yearHolidays[i];
        let holidayFulldate = hdDate.date.slice(0 , 10);
        if (currentDate == holidayFulldate || date.getDay() == 6) {
            
        }else{
            console.log("no");
        }


console.log(date.getDay());
        console.log(hdDate.date);
    }
}


