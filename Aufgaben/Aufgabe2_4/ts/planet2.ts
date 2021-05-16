namespace Aufgabe2_4 {
    export function planet2HandleSelection(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);

        sessionStorage.setItem("planet2Name", parts.planets[index].name);
        sessionStorage.setItem("planet2Image", parts.planets[index].image);
        location.href = "planet3.html";
    }

    showPossibilities(parts.planets);
}