(function (window) {
    let filteredNames = {};

    filteredNames.speak = function (name) {
        console.log("Hello, " + name + "!");
    };

    filteredNames.sortByLastLetter = function (names) {
        return names.sort(function (a, b) {
            return a.charAt(a.length - 1).localeCompare(b.charAt(b.length - 1));
        });
    };

    window.filteredNames = filteredNames;
})(window);
