namespace Aufgabe2_4 {

    export let selectionParts: HTMLDivElement = <HTMLDivElement> document.getElementById("selectionparts");
    export let selectedParts: HTMLDivElement = <HTMLDivElement> document.getElementById("selectedparts");
    export let endSolarSystem: HTMLDivElement = <HTMLDivElement> document.getElementById("solarSystem");

    export function createPartDiv(_part: SolarSystemPart, _index: number): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("solarsystempart");

        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.image;

        img.addEventListener("click", sunsHandleSelection);
        img.addEventListener("click", planetsHandleSelection);
        img.addEventListener("click", cometsHandleSelection);
        img.dataset.index = _index.toString();
        div.appendChild(img);

        let span: HTMLSpanElement = document.createElement("span");
        span.textContent = _part.name;
        div.appendChild(span);

        return div;
    }

    export function showPossibilities(_parts: SolarSystemPart[]): void {
        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = createPartDiv(_parts[i], i);
            selectionParts.appendChild(div);
        }
    }

    export function createSelectedParts(_solarSystemPart: string): void {
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "selectedpart");

            let img: HTMLImageElement = document.createElement("img");
            img.src = sessionStorage.getItem(_solarSystemPart + "Image");
            div.appendChild(img);
            selectedParts.appendChild(div);   
    }

    createSelectedParts("sun");
    createSelectedParts("planet");
    createSelectedParts("comet");


    export function createEndSolarSystemParts(_solarSystemPart: string): void {
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("id", "endSolarSystemPart" + _solarSystemPart);

        let img: HTMLImageElement = document.createElement("img");
        img.src = sessionStorage.getItem(_solarSystemPart + "Image");
        div.appendChild(img);
        endSolarSystem.appendChild(div);   
    }



}
