"use strict";
var Aufgabe2_3_2;
(function (Aufgabe2_3_2) {
    function createPartDiv(_part, _index) {
        let div = document.createElement("div");
        div.classList.add("solarsystempart");
        let img = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
        let span = document.createElement("span");
        span.textContent = _part.name;
        div.appendChild(span);
        let btn = document.createElement("button");
        btn.textContent = "Select";
        btn.addEventListener("click", handleSelection);
        btn.addEventListener("click", handleSelection2);
        btn.dataset.index = _index.toString();
        div.appendChild(btn);
        return div;
        function handleSelection(_e) {
            console.log("innere Funktion", _part);
        }
    }
    function handleSelection2(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        console.log("äußere Funktion", Aufgabe2_3_2.parts.suns[index]);
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(Aufgabe2_3_2.parts.suns);
})(Aufgabe2_3_2 || (Aufgabe2_3_2 = {}));
//# sourceMappingURL=solarsystem.js.map