"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let button = document.getElementById("button");
    button.addEventListener("click", dataTransfer);
    async function dataTransfer() {
        let formData = new FormData(document.forms[0]);
        let url = "https://immanuelgis.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map