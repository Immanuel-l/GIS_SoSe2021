namespace Pruefungsaufgabe {

    interface Picture {
        pictureUrl: string;
        pictureName: string;
    }

    if (window.location.pathname == "/Pruefungsabgabe/play.html") {  
        sessionStorage.clear();
        loadUrls();

        async function loadUrls(): Promise<void> {
            let url: string = "https://immanuelgis.herokuapp.com/loadurls";
            let response: Response = await fetch(url);
            let text: string = await response.text();
            let json: Picture[] = JSON.parse(text);
            for (let i: number = 0; i < json.length; i++) {
                let urlArray: string[] = [];
                urlArray.push(json[i].pictureUrl);
            }
            
        }

        let status: string = "Started";
        let interval: number;
        let cards: HTMLElement = document.getElementById("cards");
        let pairsCount: HTMLElement = document.getElementById("pairs-count");
        let pair: number = 0;

        let card1: HTMLDivElement;
        let cardImg1: HTMLImageElement;
        let card2: HTMLDivElement;
        let cardImg2: HTMLImageElement;
        let cardsFlipped: number = 0;

        let numberArray: number[] = [];
        for (let i: number = 0; i < 30; i++) {
            numberArray.push(i); 
        }

        let time: HTMLElement = document.getElementById("timer-time");
        let milliseconds: number = 0;
        let millisecondsContent: string = "0";
        let seconds: number = 0;
        let secondsContent: string = "0";
        let minutes: number = 0;
        let minutesContent: string = "0";
        let hours: number = 0;
        let hoursContent: string = "0";  

        for (let i: number = 0; i < 30; i++) {

            let card: HTMLDivElement = document.createElement("div");
            let cardImg: HTMLImageElement = document.createElement("img");
            card.addEventListener("click", flipCard);
            card.setAttribute("class", "card");
            card.setAttribute("id", "card" + i);
            card.style.order = i + "";
            cardImg.src = "./img/test_card.png";
            cardImg.setAttribute("id", "card-img" + i);
            cardImg.draggable = false;
            card.appendChild(cardImg);
            cards.appendChild(card);       


            function flipCard(): void {
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

                    if (card1.getAttribute("id") == card2.getAttribute("id")) {
                        end();
                        card1.removeEventListener("click", flipCard);
                        card2.removeEventListener("click", flipCard);
                        cardsFlipped = 0;
                    } else  {
                        setTimeout(() => {
                        card1.classList.toggle("flipcard");
                        card2.classList.toggle("flipcard");
                        cardsFlipped = 0;
                                }, 1000);
                    } 
                }
                
                
                
                
            }
        }


        function startTimer(): void {
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
            } else {
                millisecondsContent = "" + milliseconds;
            }
            if (seconds < 10) {
                secondsContent = "0" + seconds;
            } else {
                secondsContent = "" + seconds;
            }
            if (minutes < 10) {
                minutesContent = "0" + minutes;
            } else {
                minutesContent = "" + minutes;
            }
            if (hours < 10) {
                hoursContent = "0" + hours;
            } else {
                hoursContent = "" + hours;
            }
        }
        startStop();

        function startStop(): void {
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

        function end(): void {
            pair++;
            pairsCount.textContent = pair.toString();
            if (pair == 15) {
                status = "Stopped";
                startStop();
                sessionStorage.setItem("endTimer", time.textContent);
                setTimeout(() => {
                document.location.href = "/Pruefungsabgabe/userscore.html";
                        }, 500);
            }    
        }



    }

    if (window.location.pathname == "/Pruefungsabgabe/admin.html") {
        let showPicturesDiv: HTMLElement = document.getElementById("show-pictures");
        let savePictureButton: HTMLElement = document.getElementById("save-picture-button");
        savePictureButton.addEventListener("click", sendPicture);
        showPictures();

        let errorMessages: HTMLElement = document.getElementById("error-message");

        async function sendPicture(): Promise<void> {
            let url: string = "https://immanuelgis.herokuapp.com/addpicture";
            let formData: FormData = new FormData(document.forms[0]);      
            let query: URLSearchParams = new URLSearchParams(<any>formData);       
            url += "?" + query.toString();
            let savePictures: Response = await fetch(url);
            let savePicturesError: string = await savePictures.text();
            errorMessages.textContent = savePicturesError;
            if (errorMessages.textContent == "") {
                document.location.reload();
            }
        }

        async function showPictures(): Promise<void> {
            let url: string = "https://immanuelgis.herokuapp.com/showpictures";
            let response: Response = await fetch(url);
            let text: string = await response.text();
            let json: Picture[] = JSON.parse(text);        

            for (let i: number = 0; i < json.length; i++) {
                let pictureContainer: HTMLDivElement = document.createElement("div");
                pictureContainer.setAttribute("class", "picture-container");

                let pictureName: HTMLAnchorElement = document.createElement("a");
                pictureName.setAttribute("class", "picture-name");
                pictureName.textContent = json[i].pictureName;
               // pictureName.href = json[i].pictureUrl;
               // pictureName.target = "_blank";
                pictureContainer.appendChild(pictureName);

                let pictureDeleteButton: HTMLButtonElement = document.createElement("button");
                pictureDeleteButton.setAttribute("class", "picture-delete-button");
                pictureDeleteButton.addEventListener("click", deletePicture);
                pictureDeleteButton.textContent = "delete";
                pictureContainer.appendChild(pictureDeleteButton);

                showPicturesDiv.appendChild(pictureContainer);

                async function deletePicture(): Promise<void> {
                    let url: string = "https://immanuelgis.herokuapp.com/delete?pictureName=" + json[i].pictureName;
                    await fetch(url);
                    document.location.reload();
                }
            }
        }
    }



    if (window.location.pathname == "/Pruefungsabgabe/highscores.html") {
        let userscoreDiv: HTMLElement = document.getElementById("userscore-div");
        let usernameDiv: HTMLElement = document.getElementById("username-div");
        showhighscores();
        async function showhighscores(): Promise<void> {
            let url: string = "https://immanuelgis.herokuapp.com/showhighscores";
            let response: Response = await fetch(url);
            let text: string = await response.text();
            let json: Highscore[] = JSON.parse(text);
            console.log(json);

            for (let i: number = 0; i < json.length; i++) {

                let username: HTMLParagraphElement = document.createElement("p");
                username.setAttribute("class", "username");
                username.textContent = json[i].username;
                usernameDiv.appendChild(username);

                let userscore: HTMLParagraphElement = document.createElement("p");
                userscore.setAttribute("class", "userscore");
                userscore.textContent = json[i].userscore.toString();
                userscoreDiv.appendChild(userscore);

            }
        }

        interface Highscore {
            username: string;
            userscore: number;
        }
    }


    if (window.location.pathname == "/Pruefungsabgabe/userscore.html") {
        let yourTime: HTMLElement = document.getElementById("your-time");
        let timer: string = sessionStorage.getItem("endTimer");
        yourTime.textContent = "Your Time: " + timer;

        let saveUserscoreButton: HTMLElement = document.getElementById("save-userscore-button");
        saveUserscoreButton.addEventListener("click", sendUserscore);
        let errorMessages: HTMLElement = document.getElementById("error-message");
        async function sendUserscore(): Promise<void> {
            let url: string = "https://immanuelgis.herokuapp.com/adduserscore";
            let formData: FormData = new FormData(document.forms[0]);      
            let query: URLSearchParams = new URLSearchParams(<any>formData);       
            url += "?" + query.toString();
            let saveUserscore: Response = await fetch(url);
            let saveUserscoreError: string = await saveUserscore.text();
            errorMessages.textContent = saveUserscoreError;
            if (errorMessages.textContent == "") {
                document.location.href = "/Pruefungsabgabe/highscores.html";
            }
        }
    }
}