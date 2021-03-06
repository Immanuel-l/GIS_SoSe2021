namespace Aufgabe3_2 {
    let responseText: HTMLElement = document.getElementById("responseText");
    let buttonHtml: HTMLElement = document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", dataTransferHtml);
    let buttonJson: HTMLElement = document.getElementById("buttonJson");
    buttonJson.addEventListener("click", dataTransferJson);

    async function dataTransferHtml(): Promise<void> {
        let url: string = "https://immanuelgis.herokuapp.com/html";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log(text);
        responseText.textContent = text;
    }

    async function dataTransferJson(): Promise<void> {
        let url: string = "https://immanuelgis.herokuapp.com/json";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url);
        let jsonText: string = await response.json();
        console.log(jsonText);
        
    }
}