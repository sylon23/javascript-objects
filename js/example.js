
//creating a hotel object --park
var park = {
    name: "Park",
    oldPrice: 240.00,
    newPrice: 204
}

document.getElementById("hotelName").textContent = park.name;
document.getElementById("roomRate").textContent = "$" + park.oldPrice + ".00";
document.getElementById("specialRate").textContent = "$" + park.newPrice;

//Adding 14 days to current date, offer expires in two weeks
var fortnight = new Date(+new Date + 12096e5); //12096e5 is  14 days in milliseconds in exponential notation.
var day = fortnight.getDay();
var date = fortnight.getDate();
var month = fortnight.getMonth();
var year = fortnight.getFullYear();

//Converting the numeric dates to strings
var weekDay = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]
var fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var monthInWords = fullMonths[month];
var dayInWords = weekDay[day];

document.getElementById("offerEnds").textContent = " This Offer expires next " + dayInWords +  "\n"+ " (" + date + " " + monthInWords +" " + year + ")";
