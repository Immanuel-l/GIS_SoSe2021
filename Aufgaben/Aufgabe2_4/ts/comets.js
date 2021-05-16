"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function cometsHandleSelection(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        sessionStorage.setItem("cometName", Aufgabe2_4.parts.comets[index].name);
        sessionStorage.setItem("cometImage", Aufgabe2_4.parts.comets[index].image);
        location.href = "solarsystem.html";
    }
    Aufgabe2_4.cometsHandleSelection = cometsHandleSelection;
    Aufgabe2_4.showPossibilities(Aufgabe2_4.parts.comets);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=comets.js.map