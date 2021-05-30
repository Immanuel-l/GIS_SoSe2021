namespace Aufgabe3_1 {

    let myForm: HTMLElement = document.getElementById("myForm");
    myForm.addEventListener("submit", communicate);

    async function communicate(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://immanuelgis.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url, {method: "get"});
        let text: string = await response.text();
        console.log(text);
    }
}