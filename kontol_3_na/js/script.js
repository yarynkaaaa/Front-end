document.getElementById("add-button").onclick = function () {
    const op1 = parseFloat(document.getElementById("op1").value);
    const op2 = parseFloat(document.getElementById("op2").value);
    document.getElementById("res").innerText = "Result: " + (op1 + op2);
};

document.getElementById("sub-button").onclick = function () {
    const op1 = parseFloat(document.getElementById("op1").value);
    const op2 = parseFloat(document.getElementById("op2").value);
    document.getElementById("res").innerText = "Result: " + (op1 - op2);
};

document.getElementById("mul-button").onclick = function () {
    const op1 = parseFloat(document.getElementById("op1").value);
    const op2 = parseFloat(document.getElementById("op2").value);
    document.getElementById("res").innerText = "Result: " + op1 * op2;
};

document.getElementById("div-button").onclick = function () {
    const op1 = parseFloat(document.getElementById("op1").value);
    const op2 = parseFloat(document.getElementById("op2").value);
    if (op2 === 0) {
        document.getElementById("res").innerText = "Result: operand 2 is equal to 0";
    } else {
        document.getElementById("res").innerText = "Result: " + op1 / op2;
    }
};

document.getElementById("log-button").onclick = function () {
    const op1 = parseFloat(document.getElementById("op1").value);
    if (op1 <= 0) {
        document.getElementById("res").innerText = "Result: operand 1 is less or equal to 0";
    } else {
        document.getElementById("res").innerText = "Result: " + Math.log(op1);
        fetchHelp("log");
    }
};

document.getElementById("sin-button").onclick = function () {
    const op1 = parseFloat(document.getElementById("op1").value);
    const radians = (op1 * Math.PI) / 180;
    document.getElementById("res").innerText = "Result: " + Math.sin(radians);
    fetchHelp("sin");
};

document.getElementById("tan-button").onclick = function () {
    const op1 = parseFloat(document.getElementById("op1").value);
    const radians = (op1 * Math.PI) / 180;
    document.getElementById("res").innerText = "Result: " + Math.tan(radians);
    fetchHelp("tan");
};

function fetchHelp(func) {
    fetch(`json/${func}.json`)
        .then((response) => response.json())
        .then((data) => {
            const contentDiv = document.getElementById("content");
            contentDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            contentDiv.style.display = "block";
        })
        .catch((error) => {
            console.error("Error fetching help:", error);
            const contentDiv = document.getElementById("content");
            contentDiv.style.display = "none";
        });
}
