"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    // let responseText: HTMLElement = document.getElementById("responseText");
    let buttonSend = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataSend);
    let buttonRequest = document.getElementById("buttonRequest");
    buttonRequest.addEventListener("click", dataRequest);
    async function dataSend() {
        let url = "https://immanuelgis.herokuapp.com/send";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
        // responseText.textContent = text;
    }
    async function dataRequest() {
        let url = "https://immanuelgis.herokuapp.com/request";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let jsonText = await response.json();
        console.log(jsonText);
        // responseText.textContent = jsonText.firstname + " " + jsonText.name + " " + jsonText.matrikelnummer;
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map