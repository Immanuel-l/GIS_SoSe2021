namespace Aufgabe3_4 {
    let responseText: HTMLElement = document.getElementById("responseText");
    let buttonSend: HTMLElement = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataSend);
    let buttonRequest: HTMLElement = document.getElementById("buttonRequest");
    buttonRequest.addEventListener("click", dataRequest);

    async function dataSend(): Promise<void> {
        let url: string = "https://immanuelgis.herokuapp.com/send";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        await fetch(url);
    }

    async function dataRequest(): Promise<void> {
        let url: string = "https://immanuelgis.herokuapp.com/request";
        let response: Response = await fetch(url);
        let text: string = await response.text();
        let json: Student[] = JSON.parse(text);
        console.log(json);
        responseText.textContent = JSON.stringify(json);
        // console.log(JSON.parse(text));
        // responseText.textContent = (JSON.stringify(text)); 
    }


    interface Student {
        firstname: string;
        name: string;
        matrikelnummer: number;
    }
}