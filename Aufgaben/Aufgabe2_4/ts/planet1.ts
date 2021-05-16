namespace Aufgabe2_4 {
    export function planet1HandleSelection(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);

        sessionStorage.setItem("planet1Name", parts.planets[index].name);
        sessionStorage.setItem("planet1Image", parts.planets[index].image);
        location.href = "planet2.html";
    }

    showPossibilities(parts.planets);
}