namespace Pruefungsaufgabe {
    if (window.location.pathname == "/Pruefungsabgabe/play.html") {  
        window.setInterval(startTimer, 10);
        let cards: HTMLElement = document.getElementById("cards");
        let cardImg: HTMLImageElement = document.createElement("img");
        let pairs: HTMLElement = document.getElementById("pairs-count");
      //  let cardFlipped: number = 0;

        let pair: number = 0;
        let card1: string = "";
        let card2: string = "";

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
            cardImg = document.createElement("img");
            card.addEventListener("click", flipCard);
            card.setAttribute("class", "card");
            cardImg.src = "./img/test_card.png";
            cardImg.setAttribute("id", "card-img" + i);
            cardImg.draggable = false;
            card.appendChild(cardImg);
            cards.appendChild(card);
        }

        function flipCard(): void {
            console.log();
            
        }

        checkPair();


        function checkPair(): void {
            if (card1 == card2 && card1 != "" && card2 != "") {
                pair++;
                pairs.textContent = pair.toString();
                
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
    }

    if (window.location.pathname == "/Pruefungsabgabe/admin.html") {
        let showPicturesDiv: HTMLElement = document.getElementById("show-pictures");
        let savePictureButton: HTMLElement = document.getElementById("save-picture-button");
        savePictureButton.addEventListener("click", sendPicture);
        showPictures();

        let errorMessages: HTMLElement = document.getElementById("error-message");

        async function sendPicture(): Promise<void> {
            let url: string = "https://immanuelgis.herokuapp.com/add";
            let formData: FormData = new FormData(document.forms[0]);      
            let query: URLSearchParams = new URLSearchParams(<any>formData);       
            url += "?" + query.toString();
            let savePictures: Response = await fetch(url);
            let savePicturesError: string = await savePictures.text();
            errorMessages.textContent = savePicturesError;
        }

        async function showPictures(): Promise<void> {
            let url: string = "https://immanuelgis.herokuapp.com/show";
            let response: Response = await fetch(url);
            let text: string = await response.text();
            let json: Picture[] = JSON.parse(text);
            console.log(json);
            

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

        interface Picture {
            pictureUrl: string;
            pictureName: string;
        }
    }





}