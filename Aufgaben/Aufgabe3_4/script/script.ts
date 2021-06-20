namespace Aufgabe3_4 {
    let responseText: HTMLElement = document.getElementById("responseText");
    let buttonSend: HTMLElement = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataTransfer);
    // let buttonRequest: HTMLElement = document.getElementById("buttonRequest");
    // buttonRequest.addEventListener("click", dataTransferJson);

    async function dataTransfer(): Promise<void> {
        let url: string = "https://immanuelgis.herokuapp.com";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log(text);
        responseText.textContent = text;
    }

    // async function dataTransferJson(): Promise<void> {
    //     let url: string = "https://immanuelgis.herokuapp.com/json";
    //     let formData: FormData = new FormData(document.forms[0]);
    //     let query: URLSearchParams = new URLSearchParams(<any>formData);
    //     url += "?" + query.toString();
    //     let response: Response = await fetch(url);
    //     let jsonText: string = await response.json();
    //     console.log(jsonText);  
    // }
}