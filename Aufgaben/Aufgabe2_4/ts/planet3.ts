namespace Aufgabe2_4 {
    export function planet3HandleSelection(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);

        sessionStorage.setItem("planet3Name", parts.planets[index].name);
        sessionStorage.setItem("planet3Image", parts.planets[index].image);
        location.href = "comets.html";
    }

    showPossibilities(parts.planets);
}