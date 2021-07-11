namespace Pruefungsaufgabe { 
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