"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let responseText = document.getElementById("responseText");
    let buttonSend = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataSend);
    let buttonRequest = document.getElementById("buttonRequest");
    buttonRequest.addEventListener("click", dataRequest);
    async function dataSend() {
        let url = "https://immanuelgis.herokuapp.com/send";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        await fetch(url);
    }
    async function dataRequest() {
        let url = "https://immanuelgis.herokuapp.com/request";
        let response = await fetch(url);
        let text = await response.text();
        console.log(JSON.parse(text));
        responseText.textContent = text;
    }
    // interface Student {
    //     firstname: string;
    //     name: string;
    //     matrikelnummer: number;
    // }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map