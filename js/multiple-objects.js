//Creating multiple objects with a constructor
function Hotel(name,room,booked){
    this.name = name,
    this.room = room,
    this.booked = booked,
    this.checkAvailability = function(){
        return this.room - this.booked;
    }

}

var islandHotel = new Hotel("Island Hotel", 150, 16);
var parkHotel = new Hotel("Park Hotel", 100, 35)
var renaissance = new Hotel("Renaissance Hotel", 320, 44);

document.getElementById("hotel1").textContent = islandHotel.name + " - "+ islandHotel.checkAvailability();
document.getElementById("hotel2").textContent = parkHotel.name + " - "+ parkHotel.checkAvailability();
document.getElementById("hotel3").textContent = renaissance.name + " - "+ renaissance.checkAvailability();

