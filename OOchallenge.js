/** type of vehicle */

class Vehicle {
    constructor(make, model, year) {
        this.make = make; 
        this.model = model; 
        this.year = year; 
    }

    honk() {
        return "Beep."; 
    }

    toString() {
        return `the vehicle is a ${this.make} ${this.model} from ${this.year}.`; 
    }
}

/** cars are a type of vehicle with 4 wheels */

class car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year); 
        this.numWheels = 4; 
    }
}

/** Motocyles are a type of vehicle with 2 wheels */

class Motorcyles extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year); 
        this.numWheels = 2; 
    }

    revEngine() {
        return "VROOM!!!!"; 
    }
}

class Garage {
    constructor(capacity) {
        this.Vehicle = []; 
        this.capacity = capacity; 
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "only Vehicles are allowed in here!"; 
        }
        if (this.Vehicle.length >= this.capacity) {
            return "sorry, we're full."; 
        }
        this.Vehicle.push(newVehicle); 
        return "Vehicle added!"; 
    }
}


let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."


let myFirstCar = new car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4

let myFirstMotorcycle = new Motorcyles("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2


let garage = new Garage(2);
garage.vehicles; // []
garage.add(new car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcyles("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcyles("Honda", "Nighthawk", 2001));
// "Sorry, we're full."