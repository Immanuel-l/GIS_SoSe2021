namespace Aufgabe2_4 {
    export function cometsHandleSelection(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);

        sessionStorage.setItem("cometName", parts.comets[index].name);
        sessionStorage.setItem("cometImage", parts.comets[index].image);
        location.href = "solarsystem.html";
    }
    showPossibilities(parts.comets);
}