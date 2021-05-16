"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function planet2HandleSelection(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        sessionStorage.setItem("planet2Name", Aufgabe2_4.parts.planets[index].name);
        sessionStorage.setItem("planet2Image", Aufgabe2_4.parts.planets[index].image);
        location.href = "planet3.html";
    }
    Aufgabe2_4.planet2HandleSelection = planet2HandleSelection;
    Aufgabe2_4.showPossibilities(Aufgabe2_4.parts.planets);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=planet2.js.map