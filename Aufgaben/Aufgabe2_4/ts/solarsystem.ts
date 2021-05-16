namespace Aufgabe2_4 {
    createEndSolarSystemParts("sun");
    createEndSolarSystemParts("planet1");
    createEndSolarSystemParts("planet2");
    createEndSolarSystemParts("planet3");
    createEndSolarSystemParts("comet");

    function deleteSession(): void {
        sessionStorage.clear();
    }

    let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("tryagain");
    btn.addEventListener("click", deleteSession);


}