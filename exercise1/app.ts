interface VehicleInterface {
  getCurrentSpeed: () => void;
  setCurrentSpeed: (speed:number) => void;
  accelerateVehicle: () => void;
  decelerateVehicle: () => void;
}

type vehicleTypes =  Car | Plane | Boat | any


abstract class Vehicle implements VehicleInterface {
  
  constructor(private name: string, private currentSpeed: number) {
    if (currentSpeed < 0) {
        this.currentSpeed = 0;
    } else if (currentSpeed > 200) {
      this.currentSpeed = 200;
    } else {
      this.currentSpeed = currentSpeed;
    };
  }

  getName () {
    return this.name
  }
  
  getCurrentSpeed () {
    return this.currentSpeed
  }

  setCurrentSpeed (speed:number) {
    this.currentSpeed = speed
  }

  accelerateVehicle () {
    let newSpeed = this.currentSpeed + 1;
    if (newSpeed > 200) {
        this.setCurrentSpeed(200);
    } else {
        this.setCurrentSpeed(newSpeed);
    }
  }

  decelerateVehicle () {
    let newSpeed = this.currentSpeed - 1;
    if (newSpeed < 0) {
        this.setCurrentSpeed(0);
    } else {
        this.setCurrentSpeed(newSpeed);
    }
  }
}

class Car extends Vehicle {}

class Plane extends Vehicle {}

class Boat extends Vehicle {}

let vehicleArray: Vehicle[] = [];

const hondaCivic = new Car("hondaCivic", 30);
const chevrolet = new Car("chevrolet", 40);
const gryllindae = new Boat("gryllindae", 4);
const titanic = new Boat("titanic", 20);
const tango = new Plane("tango", 50);
const boeing = new Plane("boeing", 200);

vehicleArray.push(hondaCivic, chevrolet, gryllindae, titanic, tango, boeing);

function filterArrayByType (array:Vehicle[], type:vehicleTypes)  {
    array.map (vehicle => {
        if(vehicle instanceof type){
            console.log(vehicle.getCurrentSpeed())
        }
    })
}

vehicleArray.map((vehicle) => {
  for (var i = 0; i < 2; i++) vehicle.accelerateVehicle();
  for (var i = 0; i < 10; i++) vehicle.decelerateVehicle();
  let vehicleName = vehicle.getName();
  let vehicleSpeed = vehicle.getCurrentSpeed();
  console.log(
    `Vehicle with name ${vehicleName} has a speed of ${vehicleSpeed} km/h`
  );
});

filterArrayByType(vehicleArray, Car)