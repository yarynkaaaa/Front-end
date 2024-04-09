let car1 = new Object();

car1.color = "pink";
car1.maxSpeed = 80;
car1.driver = new Object();
car1.driver.name = "Romaniuk Yaryna";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["numberof accidents"] = 0;

let car2 = new Object();
car2.color = "black";
car2.maxSpeed = 110;
car2.driver = new Object();
car2.driver.name = "Romaniuk Yaryna";
car2.driver.category = "B";
car2.driver["personal limitations"] = "Null";
car2.tuning = false;
car2["numberof accidents"] = 2;

car1.drive = function () {
    console.log("I am not driving at night");
};
car1.drive();
car2.drive = function () {
    console.log("I can drive anytime");
};
car2.drive();
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.trip = function () {
        if (this.driver === undefined) {
            console.log("No driver assigned");
        } else {
            console.log(
                `Driver ${this.driver.name}, ${
                    this.driver.nightDriving ? "drives at night" : "does not drive at night"
                } and has ${this.driver.experience} years of experience.`
            );
        }
    };
}
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = new Object();
    this.driver.name = name;
    this.driver.nightDriving = nightDriving;
    this.driver.experience = experience;
}
let firstTruck = new Truck("white", 4000, 145, "Hyundai", "A Bog zna sho to za model'");
let secondTruck = new Truck("black", 3500, 100, "Audi", "RS6");

firstTruck.trip();
secondTruck.trip();

firstTruck.AssignDriver("Winnie the Pooh", true, 3);
secondTruck.AssignDriver("Pyatachok", false, 1);

console.log(firstTruck);
console.log(secondTruck);

firstTruck.trip();
secondTruck.trip();
