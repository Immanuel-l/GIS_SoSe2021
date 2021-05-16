namespace Aufgabe2_4 {
    export function planetsHandleSelection(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);

        sessionStorage.setItem("planetName", parts.planets[index].name);
        sessionStorage.setItem("planetImage", parts.planets[index].image);
        location.href = "comets.html";
    }

    showPossibilities(parts.planets);
}