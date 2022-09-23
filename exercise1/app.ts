
abstract class Vehicle {
  
  constructor(private _name: string, private _currentSpeed: number) {
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

  accelerateVehicle () {
    let newSpeed = this.currentSpeed + 1;
    if (newSpeed > 200) {
        this.currentSpeed = 200;
    } else {
        this.currentSpeed = newSpeed;
    }
  }

  decelerateVehicle () {
    let newSpeed = this.currentSpeed - 1;
    if (newSpeed < 0) {
        this.currentSpeed = 0;
    } else {
        this.currentSpeed = newSpeed;
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

type vehicleTypes =  Car | Plane | Boat

function filterArrayByType (array:Vehicle[], type:vehicleTypes | any)  {
    array.map (vehicle => {
        if(vehicle instanceof type){
            console.log(vehicle.currentSpeed)
        }
    })
}

vehicleArray.map((vehicle) => {
  for (var i = 0; i < 2; i++) vehicle.accelerateVehicle();
  for (var i = 0; i < 10; i++) vehicle.decelerateVehicle();

  console.log(
    `Vehicle with name ${vehicle.name} has a speed of ${vehicle.currentSpeed} km/h`
  );
});

filterArrayByType(vehicleArray, Car)