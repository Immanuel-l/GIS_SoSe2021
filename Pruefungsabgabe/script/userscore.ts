namespace Pruefungsaufgabe { 
    let yourTime: HTMLElement = document.getElementById("your-time");
    let timer: string = sessionStorage.getItem("endTimer");
    yourTime.textContent = "" + timer; 

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
            window.location.assign("./highscores.html");
        }
    }
}