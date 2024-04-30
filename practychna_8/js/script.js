(function () {
    var names = [
        "Bill",
        "John",
        "Jen",
        "Jason",
        "Paul",
        "Frank",
        "Steven",
        "Larry",
        "Paula",
        "Laura",
        "Jim",
    ];

    for (let name of names) {
        if (name.charAt(0).toLowerCase() == "j") {
            speakHello.speak(name);
        } else {
            speakGoodBye.speak(name);
        }
    }
    var targetLetter = "a";
    var sortedNames = filteredNames.sortByLastLetter(names);

    for (var i = 0; i < sortedNames.length; i++) {
        var name = sortedNames[i];
        if (name.endsWith(targetLetter)) {
            filteredNames.speak(name);
        } else {
        
        }
    }
})();
