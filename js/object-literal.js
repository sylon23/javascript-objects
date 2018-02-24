//creating a single object with a method
var hotel = {
    name: "Island Hotel",
    rooms: 150,
    booked: 16,
    checkAvailability: function(rooms,booked){
        return this.rooms - this.booked
    }
}

document.getElementById("availability").textContent = hotel.checkAvailability();
document.getElementById("hotelName").textContent = hotel.name;
