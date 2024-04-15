// 1.2.3
function Triangular(a = 3, b = 4, c = 5) {
    return [a, b, c];
}
// 1.2.4
console.log(Triangular());
console.log(Triangular(19, 18, 15));
console.log(Triangular(5, 17, 11));
// 1.2.5
function PiMultiplier(num) {
    return function () {
        return Math.PI * num;
    };
}
// 1.2.6
let PiMultipliedBy2 = PiMultiplier(2);
let PiMultipliedBy2divide3 = PiMultiplier(2 / 3);
let PiDividedBy2 = PiMultiplier(1 / 2);

console.log(PiMultipliedBy2());
console.log(PiMultipliedBy2divide3());
console.log(PiDividedBy2());
// 1.2.7
function Painter(color) {;
    return function (obj) {
        console.log(
            `Color - ${color} and ${
                obj.type === undefined ? "No 'type' property occurred!" : "type: " + obj.type
            }`
        );
    };
}
// 1.2.8
let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");
// 1.2.9
let audi = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
};

let volvo = {
    type: "Truck",
    "avg speed": 280,
    "load capacity": 2400,
};

let hyundai = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
};

PaintBlue(audi);
PaintRed(volvo);
PaintYellow(hyundai);
