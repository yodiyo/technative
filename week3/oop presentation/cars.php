<?php

interface Drivable {
    public function start(): void;
    public function drive(int $km): void;
    public function stop(): void;
}

class Car implements Drivable {
    private int $fuelLevel = 50;
    public function start(): void { /* turn ignition on */ }
    public function drive(int $km): void {
        $this->fuelLevel -= intdiv($km, 10); // encapsulated state change
    }
    public function stop(): void { /* brakes */ }
}

class ElectricCar extends Car {
    private int $battery = 80;
    public function drive(int $km): void {
        $this->battery -= intdiv($km, 5);   // polymorphic override
    }
    public function charge(int $pct): void { $this->battery = min(100, $this->battery + $pct); }
}
