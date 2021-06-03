"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let url = "https://immanuelgis.herokuapp.com/";
    let button = document.getElementById("button");
    button.addEventListener("click", dataTransfer);
    async function dataTransfer() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map