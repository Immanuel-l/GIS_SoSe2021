"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    if (window.location.pathname == "/Pruefungsabgabe/play.html") {
        let status = "Started";
        let interval;
        let cards = document.getElementById("cards");
        let cardImg = document.createElement("img");
        let pairsCount = document.getElementById("pairs-count");
        let pair = 0;
        let time = document.getElementById("timer-time");
        let milliseconds = 0;
        let millisecondsContent = "0";
        let seconds = 0;
        let secondsContent = "0";
        let minutes = 0;
        let minutesContent = "0";
        let hours = 0;
        let hoursContent = "0";
        for (let i = 0; i < 30; i++) {
            let card = document.createElement("div");
            cardImg = document.createElement("img");
            // card.addEventListener("click", flipCard);
            card.setAttribute("class", "card");
            cardImg.src = "./img/test_card.png";
            cardImg.setAttribute("id", "card-img" + i);
            cardImg.draggable = false;
            card.appendChild(cardImg);
            cards.appendChild(card);
        }
        function startTimer() {
            milliseconds++;
            time.textContent = hoursContent + ":" + minutesContent + ":" + secondsContent + ":" + millisecondsContent;
            if (milliseconds == 100) {
                seconds++;
                milliseconds = 0;
                if (seconds == 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes == 60) {
                        minutes = 0;
                        hours++;
                    }
                }
            }
            if (milliseconds < 10) {
                millisecondsContent = "0" + milliseconds;
            }
            else {
                millisecondsContent = "" + milliseconds;
            }
            if (seconds < 10) {
                secondsContent = "0" + seconds;
            }
            else {
                secondsContent = "" + seconds;
            }
            if (minutes < 10) {
                minutesContent = "0" + minutes;
            }
            else {
                minutesContent = "" + minutes;
            }
            if (hours < 10) {
                hoursContent = "0" + hours;
            }
            else {
                hoursContent = "" + hours;
            }
        }
        startStop();
        function startStop() {
            if (status == "Started") {
                interval = window.setInterval(startTimer, 10);
                status = "Stopped";
            }
            else if (status == "Stopped") {
                window.clearInterval(interval);
                status = "Started";
                //Quelle: https://www.youtube.com/watch?v=TdJRtsYLuaU
            }
        }
        function pairs() {
            if (pair >= 15) {
                status = "Stopped";
                startStop();
                sessionStorage.setItem("endTimer", time.textContent);
                document.location.href = "/Pruefungsabgabe/userscore.html";
            }
            else {
                pair++;
                pairsCount.textContent = pair.toString();
            }
        }
        window.setInterval(pairs, 200);
    }
    if (window.location.pathname == "/Pruefungsabgabe/admin.html") {
        let showPicturesDiv = document.getElementById("show-pictures");
        let savePictureButton = document.getElementById("save-picture-button");
        savePictureButton.addEventListener("click", sendPicture);
        showPictures();
        let errorMessages = document.getElementById("error-message");
        async function sendPicture() {
            let url = "https://immanuelgis.herokuapp.com/addpicture";
            let formData = new FormData(document.forms[0]);
            let query = new URLSearchParams(formData);
            url += "?" + query.toString();
            let savePictures = await fetch(url);
            let savePicturesError = await savePictures.text();
            errorMessages.textContent = savePicturesError;
            if (errorMessages.textContent == "") {
                document.location.reload();
            }
        }
        async function showPictures() {
            let url = "https://immanuelgis.herokuapp.com/showpictures";
            let response = await fetch(url);
            let text = await response.text();
            let json = JSON.parse(text);
            for (let i = 0; i < json.length; i++) {
                let pictureContainer = document.createElement("div");
                pictureContainer.setAttribute("class", "picture-container");
                let pictureName = document.createElement("a");
                pictureName.setAttribute("class", "picture-name");
                pictureName.textContent = json[i].pictureName;
                // pictureName.href = json[i].pictureUrl;
                // pictureName.target = "_blank";
                pictureContainer.appendChild(pictureName);
                let pictureDeleteButton = document.createElement("button");
                pictureDeleteButton.setAttribute("class", "picture-delete-button");
                pictureDeleteButton.addEventListener("click", deletePicture);
                pictureDeleteButton.textContent = "delete";
                pictureContainer.appendChild(pictureDeleteButton);
                showPicturesDiv.appendChild(pictureContainer);
                async function deletePicture() {
                    let url = "https://immanuelgis.herokuapp.com/delete?pictureName=" + json[i].pictureName;
                    await fetch(url);
                    document.location.reload();
                }
            }
        }
    }
    if (window.location.pathname == "/Pruefungsabgabe/highscores.html") {
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
    }
    if (window.location.pathname == "/Pruefungsabgabe/userscore.html") {
        let yourTime = document.getElementById("your-time");
        let timer = sessionStorage.getItem("endTimer");
        yourTime.textContent = "Your Time: " + timer;
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
                document.location.href = "/Pruefungsabgabe/highscores.html";
            }
        }
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=script.js.map