"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function planet3HandleSelection(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        sessionStorage.setItem("planet3Name", Aufgabe2_4.parts.planets[index].name);
        sessionStorage.setItem("planet3Image", Aufgabe2_4.parts.planets[index].image);
        location.href = "comets.html";
    }
    Aufgabe2_4.planet3HandleSelection = planet3HandleSelection;
    Aufgabe2_4.showPossibilities(Aufgabe2_4.parts.planets);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=planet3.js.map