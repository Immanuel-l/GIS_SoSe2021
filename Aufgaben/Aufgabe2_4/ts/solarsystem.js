"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.createEndSolarSystemParts("sun");
    Aufgabe2_4.createEndSolarSystemParts("planet1");
    Aufgabe2_4.createEndSolarSystemParts("planet2");
    Aufgabe2_4.createEndSolarSystemParts("planet3");
    Aufgabe2_4.createEndSolarSystemParts("comet");
    function deleteSession() {
        sessionStorage.clear();
    }
    let btn = document.getElementById("tryagain");
    btn.addEventListener("click", deleteSession);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=solarsystem.js.map