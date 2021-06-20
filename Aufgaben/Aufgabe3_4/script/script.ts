namespace Aufgabe3_4 {
    // let responseText: HTMLElement = document.getElementById("responseText");
    let buttonSend: HTMLElement = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataSend);
    let buttonRequest: HTMLElement = document.getElementById("buttonRequest");
    buttonRequest.addEventListener("click", dataRequest);

    async function dataSend(): Promise<void> {
        let url: string = "https://immanuelgis.herokuapp.com/send";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log(text);
        // responseText.textContent = text;
    }

    async function dataRequest(): Promise<void> {
        let url: string = "https://immanuelgis.herokuapp.com/request";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url);
        let jsonText: string = await response.json();
        console.log(jsonText); 
        // responseText.textContent = jsonText.firstname + " " + jsonText.name + " " + jsonText.matrikelnummer;
    }


    // interface Student {
    //     firstname: string;
    //     name: string;
    //     matrikelnummer: number;
    // }
}