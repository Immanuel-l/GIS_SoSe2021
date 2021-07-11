"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    if (window.location.pathname == "/Pruefungsabgabe/play.html") {
        window.setInterval(startTimer, 10);
        let cards = document.getElementById("cards");
        let cardImg = document.createElement("img");
        let pairs = document.getElementById("pairs-count");
        //  let cardFlipped: number = 0;
        let pair = 0;
        let card1 = "";
        let card2 = "";
        // let random: number;
        // let randomArray: number;
        // let random1: number;
        // let random2: number;
        // function randomCards(start: number, end: number): number[] {
        //     let arrayList: number[] = [];
        //     for (let i: number = start; i < end; i++) {
        //         arrayList.push(i);
        //     }     
        //     random = Math.floor(Math.random() * arrayList.length);
        //     randomArray = arrayList[random];
        //     console.log(randomArray);
        //     console.log(arrayList.splice(arrayList.indexOf(randomArray)));
        //     return arrayList;
        // }
        // randomCards(0 , 15);
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
            card.addEventListener("click", flipCard);
            card.setAttribute("class", "card");
            cardImg.src = "./img/test_card.png";
            cardImg.setAttribute("id", "card-img" + i);
            cardImg.draggable = false;
            card.appendChild(cardImg);
            cards.appendChild(card);
        }
        function flipCard() {
            console.log();
        }
        checkPair();
        function checkPair() {
            if (card1 == card2 && card1 != "" && card2 != "") {
                pair++;
                pairs.textContent = pair.toString();
            }
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
    }
    if (window.location.pathname == "/Pruefungsabgabe/admin.html") {
        let savePictureButton = document.getElementById("save-picture-button");
        savePictureButton.addEventListener("click", sendData);
        let errorMessage = document.getElementById("error-message");
        async function sendData() {
            let url = "https://immanuelgis.herokuapp.com/send";
            let formData = new FormData(document.forms[0]);
            let query = new URLSearchParams(formData);
            url += "?" + query.toString();
            await fetch(url);
            document.forms[0].submit();
        }
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=script.js.map