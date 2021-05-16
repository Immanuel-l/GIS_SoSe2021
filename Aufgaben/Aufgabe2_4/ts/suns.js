"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function sunsHandleSelection(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        sessionStorage.setItem("sunName", Aufgabe2_4.parts.suns[index].name);
        sessionStorage.setItem("sunImage", Aufgabe2_4.parts.suns[index].image);
        location.href = "planet1.html";
    }
    Aufgabe2_4.sunsHandleSelection = sunsHandleSelection;
    Aufgabe2_4.showPossibilities(Aufgabe2_4.parts.suns);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=suns.js.map