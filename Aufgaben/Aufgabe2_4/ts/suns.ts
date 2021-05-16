namespace Aufgabe2_4 {
    export function sunsHandleSelection(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);

        sessionStorage.setItem("sunName", parts.suns[index].name);
        sessionStorage.setItem("sunImage", parts.suns[index].image);
        location.href = "planet1.html";
    }

    showPossibilities(parts.suns);
}