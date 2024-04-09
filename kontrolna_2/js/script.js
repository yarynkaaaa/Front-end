function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let array = [];
for (let i = 0; i < 20; i++) {
    array.push(getRandomInt(1, 150));
}
console.log("Масив із 20-ма рандомними числами:");
console.log(array);
array.sort(function (a, b) {
    return b - a;
});
console.log("Масив з числами за спаданням виглядає так:");
console.log(array);
document.getElementById("sortedArray").innerHTML =
    "<h2>Масив з числами за спаданням виглядає так:</h2>" + array.join(", ");
function generateElement() {
    const width = document.getElementById("width-select").value;
    const color = "Червоний";
    const height = "30px";

    const generatedDiv = document.createElement("div");
    generatedDiv.style.width = width + "px";
    generatedDiv.style.height = height;
    generatedDiv.style.backgroundColor = "red";

    const divDescription = document.createElement("p");
    divDescription.textContent = `Колір: ${color}, Ширина: ${width}px, Висота: ${height}`;

    document.getElementById("generatedElement").innerHTML = "";
    document.getElementById("generatedElement").appendChild(divDescription);
    document.getElementById("generatedElement").appendChild(generatedDiv);
}
