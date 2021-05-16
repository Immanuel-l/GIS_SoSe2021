"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function planetsHandleSelection(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        sessionStorage.setItem("planetName", Aufgabe2_4.parts.planets[index].name);
        sessionStorage.setItem("planetImage", Aufgabe2_4.parts.planets[index].image);
        location.href = "comets.html";
    }
    Aufgabe2_4.planetsHandleSelection = planetsHandleSelection;
    Aufgabe2_4.showPossibilities(Aufgabe2_4.parts.planets);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=planets.js.map