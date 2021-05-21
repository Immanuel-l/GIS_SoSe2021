"use strict";
var Aufgabe2_4_2;
(function (Aufgabe2_4_2) {
    let parts;
    let wrapper = document.getElementById("selectionparts");
    let selectedParts = document.getElementById("selectedparts");
    let endSolarSystem = document.getElementById("solarSystem");
    function loadJSON() {
        parts = JSON.parse(Aufgabe2_4_2.partsJSON);
    }
    loadJSON();
    let currentParts = [];
    let currentPart = "";
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
    let selection = {};
    let storeSelection = sessionStorage.getItem("selection " + currentPart);
    if (storeSelection) {
        selection = JSON.parse(storeSelection);
    }
    showPossibilities(currentParts);
    function createPartDiv(_part) {
        let div = document.createElement("div");
        div.classList.add("solarsystempart");
        let img = document.createElement("img");
        img.src = _part.image;
        img.addEventListener("click", handleSelection);
        div.appendChild(img);
        let span = document.createElement("span");
        span.textContent = _part.name;
        div.appendChild(span);
        return div;
        function handleSelection(_e) {
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
    function showPossibilities(_parts) {
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i]);
            wrapper.appendChild(div);
        }
    }
    function createSelectedParts(_solarSystemPart) {
        let div = document.createElement("div");
        div.setAttribute("class", "selectedpart");
        let img = document.createElement("img");
        img.src = sessionStorage.getItem("selection image " + _solarSystemPart);
        if (sessionStorage.getItem("selection image " + _solarSystemPart) === null) {
            img.src = "./bilder/none.svg";
        }
        div.appendChild(img);
        selectedParts.appendChild(div);
    }
    function createEndSolarSystemParts(_solarSystemPart) {
        let div = document.createElement("div");
        div.setAttribute("id", "endSolarSystemPart" + _solarSystemPart);
        let img = document.createElement("img");
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
    }
    else {
        createEndSolarSystemParts("sun");
        createEndSolarSystemParts("planet1");
        createEndSolarSystemParts("planet2");
        createEndSolarSystemParts("planet3");
        createEndSolarSystemParts("comet");
        function deleteSession() {
            sessionStorage.clear();
        }
        let btn = document.getElementById("tryagain");
        btn.addEventListener("click", deleteSession);
    }
})(Aufgabe2_4_2 || (Aufgabe2_4_2 = {}));
//# sourceMappingURL=script.js.map