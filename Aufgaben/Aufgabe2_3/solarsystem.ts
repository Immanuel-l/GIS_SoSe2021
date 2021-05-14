namespace Aufgabe2_3_2 {
    function createPartDiv(_part: SolarSystemPart, _index: number): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("solarsystempart");

        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);

        let span: HTMLSpanElement = document.createElement("span");
        span.textContent = _part.name;
        div.appendChild(span);

        let btn: HTMLButtonElement = document.createElement("button");
        btn.textContent = "Select";
        btn.addEventListener("click", handleSelection);

        btn.addEventListener("click", handleSelection2);
        btn.dataset.index = _index.toString();

        div.appendChild(btn);

        return div;
        

        function handleSelection(_e: Event): void {
            console.log("innere Funktion", _part);
        }

    }

    function handleSelection2(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);

        console.log("äußere Funktion", parts.suns[index]);
    }

    function showPossibilities(_parts: SolarSystemPart[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("selectionWrapper");
        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
            
        }
    }


    showPossibilities(parts.suns);



}
