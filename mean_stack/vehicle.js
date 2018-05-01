/*******************VehicleConstructor************************
By Richard Morley -- globe.dasher@gmail.com

private_vars: diastance_traveled
private_methods: updateDistanceTraveled

public_vars: name, number_of_wheels, speed, number_of_passengers
public_methods: move, checkMiles, sayName, makeNoise

**************************END********************************/

const _distance_traveled = Symbol('distance_traveled');

class Vehicle {
  constructor(name, number_of_wheels, speed, number_of_passengers){
    // Private attribute
    this._distance_traveled = 0;
    this.vin = Math.random().toString(36).substring(7);
    this.name = name;
    this.number_of_wheels = number_of_wheels;
    this.speed = speed;
    this.number_of_passengers = number_of_passengers;
  }
}


Vehicle.prototype.updateDistanceTraveled = function() {
  this._distance_traveled += this.speed;
};
Vehicle.prototype.move = function() {
  this.updateDistanceTraveled();
  this.makeNoise();
  return this;
};
Vehicle.prototype.checkMiles = function() {
  console.log(this._distance_traveled);
  return this;
};
Vehicle.prototype.checkVin = function() {
  console.log("VIN: " + this.vin);
  return this;
};
Vehicle.prototype.sayName = function() {
  console.log(this.name);
  return this;
};
Vehicle.prototype.makeNoise = function() {
  console.log('Honk!');
  return this;
};

let bug = new Vehicle("Bug", 4, 25, 3);
bug.sayName().move().checkMiles().checkVin();
// So I was checking out this object and notice the methods aren't in the
// object itself from what I can see...
console.log(bug);
// However, after using a non-ES6 method add-on, the function is printed as
// part of the object.
bug.makeNoise = function(){
  console.log('Slug bug!');
};
bug.makeNoise();
console.log(bug);

var car = new Vehicle('Car', 4, 50, 5);
car.sayName().makeNoise().move().move().checkMiles();

bike = new Vehicle('Bike', 2, 10, 1.5);
bike.sayName();
bike.makeNoise = function(){
  console.log('ring ring!');
};
bike.makeNoise();

sedan = new Vehicle('Sedan', 4, 70, 6);
sedan.sayName();
sedan.checkVin();
sedan.makeNoise = function(){
  console.log('Honk Honk!');
};
sedan.makeNoise();

bus = new Vehicle('bus', 4, 50, 50);
bus.sayName();
bus.passenger = 0;
// Add a passenger Method
bus.pickUp = function(){
  console.log('Adding one passenger to the bus.');
  return bus.passenger++;
};
// Drop off a passenger Method
bus.dropOff = function(){
  console.log('Releasing one passenger from the bus.');
  return bus.passenger--;
};
// I misread the assignment and created the two methods above at first.
bus.group = function(number){
  console.log(`Adding ${number} passengers to the bus.`);
  return bus.passenger += number;
};


bus.pickUp();
bus.group(4);
console.log(bus.passenger);
bus.checkVin();
bus.dropOff();
console.log(bus.passenger);
