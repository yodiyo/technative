class Car {
  #fuel = 50;                    // encapsulated
  start() {}
  drive(km) { this.#fuel -= Math.floor(km / 10); }
  stop() {}
}
class ElectricCar extends Car {
  #battery = 80;
  drive(km) { this.#battery -= Math.floor(km / 5); } // polymorphism
  charge(pct) { this.#battery = Math.min(100, this.#battery + pct); }
}

// Polymorphism in action:
function roadTrip(drivable) {
  drivable.start();
  drivable.drive(100);
  drivable.stop();
}
roadTrip(new Car());
roadTrip(new ElectricCar());
