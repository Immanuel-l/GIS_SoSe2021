"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", communicate);
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://immanuelgis.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let text = await response.text();
        console.log(text);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map