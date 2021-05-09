namespace Aufgabe2_3 {
    //Aufgabe_1

    function getRandomColor(): string {
        let letters: string = "0123456789ABCDEF";
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let div: HTMLDivElement = document.createElement("div");
    let numberOfRectangle: number = 3;
    let removeNumber: number = 0;

    createRectangle();

    function createRectangle(): void {
        for (let i: number = 0; i < numberOfRectangle; i++) {
            div = document.createElement("div");
            let divTop: number = Math.floor(Math.random() * (500 - 50)) + 50;
            let divLeft: number = Math.floor(Math.random() * (1200 - 50)) + 50;
            let divWidth: number = Math.floor(Math.random() * (500 - 50)) + 50;
            let divHeight: number = Math.floor(Math.random() * (300 - 50)) + 50;
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


    let createButton: HTMLElement = document.getElementById("createButton");
    let resetButton: HTMLElement = document.getElementById("resetButton");

    function createFunction(): void {
        numberOfRectangle = 1;
        createRectangle();
    }

    function resetFunction(): void {
        while (removeNumber > 0) {
            document.getElementById("rectangle").remove();
            removeNumber--;
        }
    }


    createButton.addEventListener("click", createFunction);

    resetButton.addEventListener("click", resetFunction);


}