"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let responseText = document.getElementById("responseText");
    let buttonSend = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataTransfer);
    // let buttonRequest: HTMLElement = document.getElementById("buttonRequest");
    // buttonRequest.addEventListener("click", dataTransferJson);
    async function dataTransfer() {
        let url = "https://immanuelgis.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
        responseText.textContent = text;
    }
    // async function dataTransferJson(): Promise<void> {
    //     let url: string = "https://immanuelgis.herokuapp.com/json";
    //     let formData: FormData = new FormData(document.forms[0]);
    //     let query: URLSearchParams = new URLSearchParams(<any>formData);
    //     url += "?" + query.toString();
    //     let response: Response = await fetch(url);
    //     let jsonText: string = await response.json();
    //     console.log(jsonText);  
    // }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map