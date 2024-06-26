//1.2.3; 1.2.4
let arr1 = [
    1,
    5,
    9,
    4,
    { name: "Yaryna", mark: 5, subject: "JS" }, //mark:5 ale Bog zna yak tam bude ¯\_(ツ)_/¯
    function (chyslo) {
        return chyslo ** 4;
    },
    function (object) {
        console.log(object.name);
    },
    -6,
    14,
];
arr1.forEach((value) => {
    console.log(value);
});
//1.2.5 - 1.2.8
arr1.splice(1, 1, 8);
arr1.splice(3, 0, "Hello");

const arr2 = arr1.slice(6, 8);

arr2.forEach((value) => {
    console.log(value);
});
//1.2.9; 1.2.10
const arr3 = arr1.slice(0, 3);
arr3.forEach((value) => {
    console.log(value);
});
//1.2.11; 1.2.12

const arr3Reversed = arr3.reverse();
arr3Reversed.forEach((value) => {
    console.log(value);
});
//1.2.13
console.log(arr1.indexOf(-6));
//1.2.14
console.log(arr1.filter((elem) => elem > 4));
//1.2.15
arr1[7](arr1[5]);
//1.2.16
console.log(arr1[6](-6));
//1.2.17
for (const index in arr1) {
    console.log(arr1[index]);
}
//1.2.18
for (const key in arr1[5]) {
    console.log(key, arr1[5][key]);
}

//1.2.19
for (const element of arr1) {
    console.log(element);
}
//1.2.20
arr1.version = "1.0.0";
//1.2.21
for (const key in arr1) {
    console.log(key, arr1[key]);
}
//1.2.22
for (const elem of arr1) {
    console.log(elem);
}
//1.2.23
const Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior",
};

const Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle",
};

const Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee",
};
//1.2.24
const map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);
//1.2.25; 1.2.26
console.log(map1.get("Ivanko"));
console.log(map1.get("Volodyk"));
//1.2.27 - 1.2.29
for (const key of map1.keys()) {
    console.log(key);
}

map1.delete("Mychajlyk");

for (const person of map1.values()) {
    console.log(`${person.name} is ${person.level} in ${person.skill}`);
}
//1.2.30
const set1 = new Set();
set1.add(Petryk);
set1.add(Mychajlyk);
set1.add(Volodyk);
//1.2.31
const Antypko = {
    name: "Antypko",
    skill: "PHP",
    level: "senior",
};
//1.2.32 - 1.2.33
console.log(set1.has(Antypko));
console.log(set1.has(Mychajlyk));
//1.2.34
for (const elem of set1) {
    console.log(elem);
}
//1.2.35
set1.delete(Volodyk);
//1.2.36
for (const person of set1) {
    console.log(`${person.name} is ${person.level} in ${person.skill}`);
}
