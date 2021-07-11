"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    sessionStorage.clear();
    let status = "Started";
    let interval;
    let cards = document.getElementById("cards");
    let pairsCount = document.getElementById("pairs-count");
    let pair = 0;
    let card1;
    let cardImg1;
    let card2;
    let cardImg2;
    let cardsFlipped = 0;
    let numberCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    function getNumberCards() {
        let index = Math.floor(Math.random() * numberCards.length);
        return (numberCards[index]);
        numberCards.splice(index, 1);
    }
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
        loadUrls();
        let card = document.createElement("div");
        let cardImg = document.createElement("img");
        card.addEventListener("click", flipCard);
        card.setAttribute("class", "card");
        card.setAttribute("id", "card" + i);
        cardImg.setAttribute("id", "card-img" + i);
        cardImg.setAttribute("name", "" + getNumberCards());
        cardImg.draggable = false;
        card.appendChild(cardImg);
        cards.appendChild(card);
        async function loadUrls() {
            let url = "https://immanuelgis.herokuapp.com/loadurls";
            let response = await fetch(url);
            let text = await response.text();
            let json = JSON.parse(text);
            let urlArray = [];
            for (let i = 0; i < json.length; i++) {
                urlArray.push(json[i].pictureUrl);
            }
            let allPictures = [];
            for (let j = 0; j < 15; j++) {
                allPictures[j] = urlArray[j];
                allPictures[j + 15] = urlArray[j];
            }
            cardImg.src = allPictures[i];
        }
        function flipCard() {
            cardsFlipped++;
            if (cardsFlipped == 1) {
                card1 = card;
                cardImg1 = cardImg;
                card1.classList.toggle("flipcard");
                cardImg1.style.display = "block";
                console.log(card1 + " Karte1");
            }
            if (cardsFlipped == 2) {
                card2 = card;
                cardImg2 = cardImg;
                card2.classList.toggle("flipcard");
                cardImg2.style.display = "block";
                console.log(card2 + " Karte2");
                if (cardImg1.src == cardImg2.src) {
                    end();
                    card1.removeEventListener("click", flipCard);
                    card2.removeEventListener("click", flipCard);
                    cardsFlipped = 0;
                }
                else {
                    setTimeout(() => {
                        card1.classList.toggle("flipcard");
                        card2.classList.toggle("flipcard");
                        cardsFlipped = 0;
                    }, 1000);
                }
            }
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
    function end() {
        pair++;
        pairsCount.textContent = pair.toString();
        if (pair == 15) {
            status = "Stopped";
            startStop();
            sessionStorage.setItem("endTimer", time.textContent);
            sessionStorage.setItem("milliseconds", milliseconds.toString());
            sessionStorage.setItem("seconds", seconds.toString());
            sessionStorage.setItem("minutes", minutes.toString());
            sessionStorage.setItem("hours", hours.toString());
            setTimeout(() => {
                document.location.href = "/Pruefungsabgabe/userscore.html";
            }, 500);
        }
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=play.js.map