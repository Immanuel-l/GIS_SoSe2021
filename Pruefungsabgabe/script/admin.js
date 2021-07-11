"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
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
            pictureName.href = json[i].pictureUrl;
            pictureName.target = "_blank";
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
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=admin.js.map