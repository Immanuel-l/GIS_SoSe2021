"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let url = "https://immanuelgis.herokuapp.com";
    let responseText = document.getElementById("responseText");
    let buttonHtml = document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", dataTransferHtml);
    let buttonJson = document.getElementById("buttonJson");
    buttonJson.addEventListener("click", dataTransferJson);
    async function dataTransferHtml() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "/html" + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
        responseText.textContent = text;
    }
    async function dataTransferJson() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "/json" + "?" + query.toString();
        let response = await fetch(url);
        let jsonText = await response.json();
        console.log(jsonText);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map