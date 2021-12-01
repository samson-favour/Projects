function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
// console.log(areaOne)
// console.log(volumeOne)
/*
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};
console.log(hotel)
*/


function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }
};

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel(' Park', 120, 77);
// console.log(parkHotel)

function windowSize() {
    var width = this.innerWidth;
    var height = this.innerHeight;
    return [height, width];
}
// console.log(windowSize());

var width = 600
var shape = {
    width: 300
};
var showWidth = function () {
    document.write(this.width);
}
// showWidth();
var width = 600;
var shape = {
    width: 300
};
var showWidth = function () {
    document.write(this.width)
}
shape.getWidth = showWidth;
// shape.getWidth();
// showWidth();

obj = {
    butter: 100,
    peakMilk: 120,
    softDrink: 110
}
showObj = prompt('please add items')

if (showObj == Object.key(obj)) {
    console.log('butter    ' + obj.butter)
}
// console.log()