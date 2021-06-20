"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonSend = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataSend);
    let buttonRequest = document.getElementById("buttonRequest");
    buttonRequest.addEventListener("click", dataRequest);
    let loaded = 0;
    let responseContainer = document.getElementById("responseContainer");
    async function dataSend() {
        let url = "https://immanuelgis.herokuapp.com/send";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        await fetch(url);
        document.location.reload();
    }
    async function dataRequest() {
        let url = "https://immanuelgis.herokuapp.com/request";
        let response = await fetch(url);
        let text = await response.text();
        let json = JSON.parse(text);
        if (loaded == 0) {
            for (let i = 0; i < json.length; i++) {
                let studentContainer = document.createElement("div");
                studentContainer.setAttribute("class", "studentContainer");
                let studentFirstname = document.createElement("p");
                studentFirstname.setAttribute("class", "studentFirstname");
                studentFirstname.textContent = json[i].firstname;
                studentContainer.appendChild(studentFirstname);
                let studentName = document.createElement("p");
                studentName.setAttribute("class", "studentName");
                studentName.textContent = json[i].name;
                studentContainer.appendChild(studentName);
                let studentMatrikelnummer = document.createElement("p");
                studentMatrikelnummer.setAttribute("class", "studentMatrikelnummer");
                studentMatrikelnummer.textContent = json[i].matrikelnummer;
                studentContainer.appendChild(studentMatrikelnummer);
                let studentDeleteButton = document.createElement("button");
                studentDeleteButton.setAttribute("class", "studentDeleteButton");
                studentDeleteButton.addEventListener("click", deleteStudentFunction);
                studentDeleteButton.textContent = "delete";
                studentContainer.appendChild(studentDeleteButton);
                async function deleteStudentFunction() {
                    let url = "https://immanuelgis.herokuapp.com/delete?matrikelnummer=" + json[i].matrikelnummer;
                    await fetch(url);
                    document.location.reload();
                }
                responseContainer.appendChild(studentContainer);
                loaded = 1;
            }
        }
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map