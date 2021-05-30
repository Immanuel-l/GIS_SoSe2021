namespace Aufgabe3_1 {

    let button: HTMLElement = document.getElementById("button");
    let serverMessage: HTMLElement = document.getElementById("serverMessage");

    button.addEventListener("click", dataTransfer);

    async function dataTransfer(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://immanuelgis.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log(text);

        serverMessage.textContent = text;


    }
}