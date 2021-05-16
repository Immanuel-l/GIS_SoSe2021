"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.selectionParts = document.getElementById("selectionparts");
    Aufgabe2_4.selectedParts = document.getElementById("selectedparts");
    Aufgabe2_4.endSolarSystem = document.getElementById("solarSystem");
    function createPartDiv(_part, _index) {
        let div = document.createElement("div");
        div.classList.add("solarsystempart");
        let img = document.createElement("img");
        img.src = _part.image;
        img.addEventListener("click", Aufgabe2_4.sunsHandleSelection);
        img.addEventListener("click", Aufgabe2_4.planet1HandleSelection);
        img.addEventListener("click", Aufgabe2_4.planet2HandleSelection);
        img.addEventListener("click", Aufgabe2_4.planet3HandleSelection);
        img.addEventListener("click", Aufgabe2_4.cometsHandleSelection);
        img.dataset.index = _index.toString();
        div.appendChild(img);
        let span = document.createElement("span");
        span.textContent = _part.name;
        div.appendChild(span);
        return div;
    }
    Aufgabe2_4.createPartDiv = createPartDiv;
    function showPossibilities(_parts) {
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            Aufgabe2_4.selectionParts.appendChild(div);
        }
    }
    Aufgabe2_4.showPossibilities = showPossibilities;
    function createSelectedParts(_solarSystemPart) {
        let div = document.createElement("div");
        div.setAttribute("class", "selectedpart");
        let img = document.createElement("img");
        img.src = sessionStorage.getItem(_solarSystemPart + "Image");
        div.appendChild(img);
        Aufgabe2_4.selectedParts.appendChild(div);
    }
    Aufgabe2_4.createSelectedParts = createSelectedParts;
    createSelectedParts("sun");
    createSelectedParts("planet1");
    createSelectedParts("planet2");
    createSelectedParts("planet3");
    createSelectedParts("comet");
    function createEndSolarSystemParts(_solarSystemPart) {
        let div = document.createElement("div");
        div.setAttribute("id", "endSolarSystemPart" + _solarSystemPart);
        let img = document.createElement("img");
        img.src = sessionStorage.getItem(_solarSystemPart + "Image");
        div.appendChild(img);
        Aufgabe2_4.endSolarSystem.appendChild(div);
    }
    Aufgabe2_4.createEndSolarSystemParts = createEndSolarSystemParts;
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map