document.getElementById("send").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var meal = document.querySelector('input[name="meal"]:checked');
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var comment = document.getElementById("comment").value;

    if (!username || !email || !meal || foods.length === 0) {
        alert("Нахолєру тобі тих проблєм, пиши де пропустив(-ла)...");
        return;
    }

    var mealValue = meal ? meal.value : "HE вказано";
    var foodsValue = Array.from(foods)
        .map(function (food) {
            return food.value;
        })
        .join(", ");

    var outputText = username + " (" + email + ") з’їв(-ла) на " + mealValue + " " + foodsValue;
    if (comment) {
        outputText += ' та залишив(-ла) такий коментар: "' + comment + '"';
    }

    document.getElementById("output").innerText = outputText;
});
