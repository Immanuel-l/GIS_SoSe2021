"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Aufgabe_1
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let div = document.createElement("div");
    let numberOfRectangle = 3;
    let removeNumber = 0;
    createRectangle();
    function createRectangle() {
        for (let i = 0; i < numberOfRectangle; i++) {
            div = document.createElement("div");
            let divTop = Math.floor(Math.random() * (500 - 50)) + 50;
            let divLeft = Math.floor(Math.random() * (1200 - 50)) + 50;
            let divWidth = Math.floor(Math.random() * (500 - 50)) + 50;
            let divHeight = Math.floor(Math.random() * (300 - 50)) + 50;
            div.setAttribute("id", "rectangle");
            div.style.position = "absolute";
            div.style.top = divTop + "px";
            div.style.left = divLeft + "px";
            div.style.width = divWidth + "px";
            div.style.height = divHeight + "px";
            div.style.backgroundColor = getRandomColor();
            document.body.appendChild(div);
            removeNumber++;
        }
    }
    let createButton = document.getElementById("createButton");
    let resetButton = document.getElementById("resetButton");
    function createFunction() {
        numberOfRectangle = 1;
        createRectangle();
    }
    function resetFunction() {
        while (removeNumber > 0) {
            document.getElementById("rectangle").remove();
            removeNumber--;
        }
    }
    createButton.addEventListener("click", createFunction);
    resetButton.addEventListener("click", resetFunction);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map