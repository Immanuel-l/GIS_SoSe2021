"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    let userscoreDiv = document.getElementById("userscore-div");
    let usernameDiv = document.getElementById("username-div");
    showhighscores();
    async function showhighscores() {
        let url = "https://immanuelgis.herokuapp.com/showhighscores";
        let response = await fetch(url);
        let text = await response.text();
        let json = JSON.parse(text);
        console.log(json);
        for (let i = 0; i < json.length; i++) {
            let username = document.createElement("p");
            username.setAttribute("class", "username");
            username.textContent = json[i].username;
            usernameDiv.appendChild(username);
            let userscore = document.createElement("p");
            userscore.setAttribute("class", "userscore");
            userscore.textContent = json[i].userscore.toString();
            userscoreDiv.appendChild(userscore);
        }
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=highscore.js.map