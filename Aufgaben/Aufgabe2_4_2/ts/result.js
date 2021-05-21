"use strict";
var Aufgabe2_4_2;
(function (Aufgabe2_4_2) {
    function deleteSession() {
        sessionStorage.clear();
    }
    let btn = document.getElementById("tryagain");
    btn.addEventListener("click", deleteSession);
})(Aufgabe2_4_2 || (Aufgabe2_4_2 = {}));
//# sourceMappingURL=result.js.map