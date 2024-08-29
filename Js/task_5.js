class Car {
    constructor(make, model, year, enginePower) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.enginePower = enginePower;
    }

    displayInfo() {
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Потужність двигуна: ${this.enginePower} к.с.`);
    }
}

class PassengerCar extends Car {
    constructor(make, model, year, enginePower, passengerSeats) {
        super(make, model, year, enginePower);
        this.passengerSeats = passengerSeats;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Кількість пасажирських місць: ${this.passengerSeats}`);
    }
}

class Truck extends Car {
    constructor(make, model, year, enginePower, loadCapacity) {
        super(make, model, year, enginePower);
        this.loadCapacity = loadCapacity; // вантажопідйомність
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Вантажопідйомність: ${this.loadCapacity} т.`);
    }
}

class Bus extends Car {
    constructor(make, model, year, enginePower, busLength) {
        super(make, model, year, enginePower);
        this.busLength = busLength; // довжина автобуса
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Довжина автобуса: ${this.busLength} м.`);
    }
}

const vehicles = [
    new PassengerCar("Toyota", "Camry", 2020, 203, 5),
    new Truck("Volvo", "FH16", 2018, 600, 20),
    new Bus("Mercedes-Benz", "Tourismo", 2019, 354, 12)
];

vehicles.forEach(vehicle => vehicle.displayInfo());