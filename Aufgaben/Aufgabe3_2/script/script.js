"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let responseText = document.getElementById("responseText");
    let buttonHtml = document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", dataTransferHtml);
    let buttonJson = document.getElementById("buttonJson");
    buttonJson.addEventListener("click", dataTransferJson);
    async function dataTransferHtml() {
        let url = "https://immanuelgis.herokuapp.com/html";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
        responseText.textContent = text;
    }
    async function dataTransferJson() {
        let url = "https://immanuelgis.herokuapp.com/json";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let jsonText = await response.json();
        console.log(jsonText);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map