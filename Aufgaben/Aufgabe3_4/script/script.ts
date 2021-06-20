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

        for (let i: number = 0; i < json.length; i++) {
            let studentContainer: HTMLDivElement = document.createElement("div");
            studentContainer.setAttribute("class", "studentContainer");

            let studentFirstname: HTMLParagraphElement = document.createElement("p");
            studentFirstname.setAttribute("class", "studentFirstname");
            studentFirstname.textContent = json[i].firstname;
            studentContainer.appendChild(studentFirstname);

            let studentName: HTMLParagraphElement = document.createElement("p");
            studentName.setAttribute("class", "studentName");
            studentName.textContent = json[i].name;
            studentContainer.appendChild(studentName);

            let studentMatrikelnummer: HTMLParagraphElement = document.createElement("p");
            studentMatrikelnummer.setAttribute("class", "studentMatrikelnummer");
            studentMatrikelnummer.textContent = json[i].matrikelnummer;
            studentContainer.appendChild(studentMatrikelnummer);

            let studentDeleteButton: HTMLButtonElement = document.createElement("button");
            studentDeleteButton.setAttribute("class", "studentDeleteButton");
            studentDeleteButton.addEventListener("click", deleteStudentFunction);
            studentDeleteButton.textContent = "delete";
            studentContainer.appendChild(studentDeleteButton);

            async function deleteStudentFunction(): Promise<void> {
                let url: string = "https://immanuelgis.herokuapp.com/delete?matrikelnummer=" + json[i].matrikelnummer;
                await fetch(url);
                dataRequest();
            }

            responseContainer.appendChild(studentContainer);
        }
    }

    interface Student {
        firstname: string;
        name: string;
        matrikelnummer: string;
    }
}