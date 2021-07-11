"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    let yourTime = document.getElementById("your-time");
    let timer = sessionStorage.getItem("endTimer");
    yourTime.textContent = "" + timer;
    let saveUserscoreButton = document.getElementById("save-userscore-button");
    saveUserscoreButton.addEventListener("click", sendUserscore);
    let errorMessages = document.getElementById("error-message");
    async function sendUserscore() {
        let url = "https://immanuelgis.herokuapp.com/adduserscore";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let saveUserscore = await fetch(url);
        let saveUserscoreError = await saveUserscore.text();
        errorMessages.textContent = saveUserscoreError;
        if (errorMessages.textContent == "") {
            document.location.href = "highscores.html";
        }
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=userscore.js.map