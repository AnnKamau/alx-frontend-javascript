const carSymbol = Symbol('Car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    clonedCar[carSymbol] = true;
    return clonedCar;
  }
}
