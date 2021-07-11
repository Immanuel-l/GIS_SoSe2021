namespace Pruefungsaufgabe {  

    interface Picture {
        pictureUrl: string;
        pictureName: string;
    }

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
            pictureName.href = json[i].pictureUrl;
            pictureName.target = "_blank";
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