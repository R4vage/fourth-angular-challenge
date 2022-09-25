abstract class Vehicle {
  
  constructor (private _name: string, private _currentSpeed: number) {
    if (_currentSpeed < 0) {
        this._currentSpeed = 0;
    } else if (_currentSpeed > 200) {
      this._currentSpeed = 200;
    } else {
      this._currentSpeed = _currentSpeed;
    };
  }

  get name () {
    return this._name
  }
  
  get currentSpeed () {
    return this._currentSpeed
  }

  set currentSpeed (speed:number) {
    this._currentSpeed = speed
  }

  accelerateVehicleOnce () {
    let newSpeed = this.currentSpeed + 1;
    if (newSpeed > 200) {
        this.currentSpeed = 200;
    } else {
        this.currentSpeed = newSpeed;
    }
  }

  decelerateVehicleOnce () {
    let newSpeed = this.currentSpeed - 1;
    if (newSpeed < 0) {
        this.currentSpeed = 0;
    } else {
        this.currentSpeed = newSpeed;
    }
  }

  accelerateVehicle (n:number) {
    for (var i = 0; i < n; i++) this.accelerateVehicleOnce();
  }

  decelerateVehicle (n:number) {
    for (var i = 0; i < n; i++) this.decelerateVehicleOnce();
  }

  consoleCurrentSpeed () {
    console.log(`${this.constructor.name} with name ${this.name} has a speed of ${this.currentSpeed} km/h`)
  }

  static filterArrayByType (array:Vehicle[], type:vehicleTypes | any) {
    return array.filter (vehicle=> vehicle instanceof type)
  }
}

class Car extends Vehicle {}
class Plane extends Vehicle {}
class Boat extends Vehicle {}


const hondaCivic = new Car("hondaCivic", 30);
const chevrolet = new Car("chevrolet", 40);
const gryllindae = new Boat("gryllindae", 4);
const titanic = new Boat("titanic", 20);
const tango = new Plane("tango", 50);
const boeing = new Plane("boeing", 200);

let vehicleArray: Vehicle[] = [];
vehicleArray.push(hondaCivic, chevrolet, gryllindae, titanic, tango, boeing);

type vehicleTypes =  Car | Plane | Boat

vehicleArray.map ((vehicle) => {
  vehicle.accelerateVehicle(2)
  vehicle.decelerateVehicle(10)
  vehicle.consoleCurrentSpeed()
});

Vehicle.filterArrayByType(vehicleArray, Car).map(vehicle => vehicle.consoleCurrentSpeed())
Vehicle.filterArrayByType(vehicleArray, Boat).map(vehicle => vehicle.consoleCurrentSpeed())
Vehicle.filterArrayByType(vehicleArray, Plane).map(vehicle => vehicle.consoleCurrentSpeed())