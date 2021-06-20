namespace Aufgabe3_4 {
    // let responseText: HTMLElement = document.getElementById("responseText");
    let buttonSend: HTMLElement = document.getElementById("buttonSend");
    buttonSend.addEventListener("click", dataSend);
    let buttonRequest: HTMLElement = document.getElementById("buttonRequest");
    buttonRequest.addEventListener("click", dataRequest);

    let responseContainer: HTMLDivElement = <HTMLDivElement> document.getElementById("responseContainer");

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
        console.log(json[0]);
        // responseText.textContent = JSON.stringify(json[0]); 

        for (let i: number = 0; i < json.length; i++) {
            let studentContainer: HTMLDivElement = document.createElement("div");
            studentContainer.appendChild(responseContainer);
        }
    }

    interface Student {
        firstname: string;
        name: string;
        matrikelnummer: number;
    }
}