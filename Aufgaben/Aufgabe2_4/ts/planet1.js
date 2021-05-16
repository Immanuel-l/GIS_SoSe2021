"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function planet1HandleSelection(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        sessionStorage.setItem("planet1Name", Aufgabe2_4.parts.planets[index].name);
        sessionStorage.setItem("planet1Image", Aufgabe2_4.parts.planets[index].image);
        location.href = "planet2.html";
    }
    Aufgabe2_4.planet1HandleSelection = planet1HandleSelection;
    Aufgabe2_4.showPossibilities(Aufgabe2_4.parts.planets);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=planet1.js.map