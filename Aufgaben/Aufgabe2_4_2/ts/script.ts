namespace Aufgabe2_4_2 {
    let parts: SolarSystem;
    let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("selectionparts");
    let selectedParts: HTMLDivElement = <HTMLDivElement> document.getElementById("selectedparts");
    let endSolarSystem: HTMLDivElement = <HTMLDivElement> document.getElementById("solarSystem");

    function loadJSON(): void {
        parts = JSON.parse(partsJSON);
    }
    loadJSON();


    let currentParts: SolarSystemPart[] = [];
    let currentPart: string = "";

    switch (document.title) {
        case "SolarSystem - Sun":
            currentPart = "sun";
            currentParts = parts.suns;
            break;
        case "SolarSystem - Planet1":
            currentPart = "planet1";
            currentParts = parts.planets;
            break;
        case "SolarSystem - Planet2":
            currentPart = "planet2";
            currentParts = parts.planets;
            break;
        case "SolarSystem - Planet3":
            currentPart = "planet3";
            currentParts = parts.planets;
            break;
        case "SolarSystem - Comet":
            currentPart = "comet";
            currentParts = parts.comets;
            break;
        default:
            break;
    }

    let selection: Selection = {};
    let storeSelection: string = sessionStorage.getItem("selection " + currentPart);
    if (storeSelection) {
        selection = JSON.parse(storeSelection);
    }

    showPossibilities(currentParts);

    function createPartDiv(_part: SolarSystemPart): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("solarsystempart");

        let img: HTMLImageElement = document.createElement("img");    
        img.src = _part.image;

        img.addEventListener("click", handleSelection);
        div.appendChild(img);

        let span: HTMLSpanElement = document.createElement("span");
        span.textContent = _part.name;
        div.appendChild(span);

        return div;

        function handleSelection(_e: Event): void {
            switch (currentPart) {
                case "sun":
                    selection.sun = _part;
                    break;
                case "planet1":
                    selection.planet = _part;
                    break;
                case "planet2":
                    selection.planet = _part;
                    break;
                case "planet3":
                    selection.planet = _part;
                    break;
                case "comet":
                    selection.comet = _part;
                    break;
            }

            sessionStorage.setItem("selection " + currentPart, JSON.stringify(selection));
            sessionStorage.setItem("selection image " + currentPart, _part.image);

            switch (currentPart) {
                case "sun":
                    window.location.assign("./planet1.html");
                    break;
                case "planet1":
                    window.location.assign("./planet2.html");
                    break;
                case "planet2":
                    window.location.assign("./planet3.html");
                    break;
                case "planet3":
                    window.location.assign("./comets.html");
                    break;
                case "comet":
                    window.location.assign("./solarsystem.html");
                    break;
            }
        }
    }


    function showPossibilities(_parts: SolarSystemPart[]): void {
        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = createPartDiv(_parts[i]);
            wrapper.appendChild(div);
            
        }
    }


    function createSelectedParts(_solarSystemPart: string): void {
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", "selectedpart");

        let img: HTMLImageElement = document.createElement("img");
        img.src = sessionStorage.getItem("selection image " + _solarSystemPart);

        if (sessionStorage.getItem("selection image " + _solarSystemPart) === null) {
            img.src = "./bilder/none.svg";
        }
        
        
        div.appendChild(img);
        selectedParts.appendChild(div);   
    }

    function createEndSolarSystemParts(_solarSystemPart: string): void {
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("id", "endSolarSystemPart" + _solarSystemPart);

        let img: HTMLImageElement = document.createElement("img");
        img.src = sessionStorage.getItem("selection image " + _solarSystemPart);

        if (sessionStorage.getItem("selection image " + _solarSystemPart) === null) {
            img.src = "./bilder/none.svg";
        }
        div.appendChild(img);
        endSolarSystem.appendChild(div);
    }

    if (document.title != "SolarSystem") {
        createSelectedParts("sun");
        createSelectedParts("planet1");
        createSelectedParts("planet2");
        createSelectedParts("planet3");
        createSelectedParts("comet");
    } else {
        createEndSolarSystemParts("sun");
        createEndSolarSystemParts("planet1");
        createEndSolarSystemParts("planet2");
        createEndSolarSystemParts("planet3");
        createEndSolarSystemParts("comet");

        function deleteSession(): void {
            sessionStorage.clear();
        }
    
        let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("tryagain");
        btn.addEventListener("click", deleteSession);
    }
    


}
