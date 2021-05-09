namespace Aufgabe2_3_2 {
    export interface Suns {
        imageUrl: string;
        name: string;
        diameter: number;
        mass: number;
    }

    export interface Planets {
        imageUrl: string;
        name: string;
        orbitPosition: number;
        diameter: number;
        distanceToTheSun: number;
        mass: number;
        orbitalTime: number;
        moons: number;
    }

    export interface SolarSystem {
        name: string;
        imageUrl: string;
        yellowSun: Suns;
        blueSun: Suns;
        redSun: Suns;
        planetMercury: Planets;
        planetVenus: Planets;
        planetEarth: Planets;
        planetMars: Planets;
        planetJupiter: Planets;
        planetSaturn: Planets;
        planetUranus: Planets;
        planetNeptune: Planets;
    }


    let containerDiv: HTMLDivElement = document.createElement("div");
    let solarSystemContainerDiv: HTMLDivElement = document.createElement("div");
    let selectionContainerDiv: HTMLDivElement = document.createElement("div");

    let sunsDiv: HTMLDivElement = document.createElement("div");
    let planetsDiv: HTMLDivElement = document.createElement("div");

    let sunsH1: HTMLHeadingElement  = document.createElement("h1");
    let planetsH1: HTMLHeadingElement  = document.createElement("h1");

    let solarSystemImg: HTMLImageElement = document.createElement("img");
    let yellowSunImg: HTMLImageElement = document.createElement("img");
    let blueSunImg: HTMLImageElement = document.createElement("img");
    let redSunImg: HTMLImageElement = document.createElement("img");
    let planetMercuryImg: HTMLImageElement = document.createElement("img");
    let planetVenusImg: HTMLImageElement = document.createElement("img");
    let planetEarthImg: HTMLImageElement = document.createElement("img");
    let planetMarsImg: HTMLImageElement = document.createElement("img");
    let planetJupiterImg: HTMLImageElement = document.createElement("img");
    let planetSaturnImg: HTMLImageElement = document.createElement("img");
    let planetUranusImg: HTMLImageElement = document.createElement("img");
    let planetNeptuneImg: HTMLImageElement = document.createElement("img");

    let selectionYellowSunImg: HTMLImageElement = document.createElement("img");
    let selectionBlueSunImg: HTMLImageElement = document.createElement("img");
    let selectionRedSunImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetMercuryImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetVenusImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetEarthImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetMarsImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetJupiterImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetSaturnImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetUranusImg: HTMLImageElement = document.createElement("img");
    let selectionPlanetNeptuneImg: HTMLImageElement = document.createElement("img");


    function createContainer(): void {
        containerDiv.setAttribute("id", "container");
        document.body.appendChild(containerDiv);

        solarSystemContainerDiv.setAttribute("id", "solar-system-container");
        containerDiv.appendChild(solarSystemContainerDiv);

        selectionContainerDiv.setAttribute("id", "selection-container");
        containerDiv.appendChild(selectionContainerDiv);
    }

    function createSolarSystem(): void {
        solarSystemImg.setAttribute("id", "solar-system");
        solarSystemImg.src = data[0].imageUrl;
        solarSystemImg.alt = "solarsystem";
        solarSystemContainerDiv.appendChild(solarSystemImg);

        //yellowSunImg.setAttribute("id", "solar-system-yellow-sun");
        yellowSunImg.setAttribute("class", "solar-system-sun");
        yellowSunImg.src = data[0].yellowSun.imageUrl;
        yellowSunImg.alt = "yellow_sun";
        solarSystemContainerDiv.appendChild(yellowSunImg);

        //blueSunImg.setAttribute("id", "solar-system-blue-sun");
        blueSunImg.setAttribute("class", "solar-system-sun");
        blueSunImg.src = data[0].blueSun.imageUrl;
        blueSunImg.alt = "blue_sun";
        solarSystemContainerDiv.appendChild(blueSunImg);

        //redSunImg.setAttribute("id", "solar-system-red-sun");
        redSunImg.setAttribute("class", "solar-system-sun");
        redSunImg.src = data[0].redSun.imageUrl;
        redSunImg.alt = "red_sun";
        solarSystemContainerDiv.appendChild(redSunImg);


        //planetMercuryImg.setAttribute("id", "solar-system-planet-mercury");
        planetMercuryImg.setAttribute("class", "solar-system-planet");
        planetMercuryImg.src = data[0].planetMercury.imageUrl;
        planetMercuryImg.alt = "planet_mercury";
        solarSystemContainerDiv.appendChild(planetMercuryImg);

        //planetVenusImg.setAttribute("id", "solar-system-planet-Venus");
        planetVenusImg.setAttribute("class", "solar-system-planet");
        planetVenusImg.src = data[0].planetVenus.imageUrl;
        planetVenusImg.alt = "planet_Venus";
        solarSystemContainerDiv.appendChild(planetVenusImg);

        //planetEarthImg.setAttribute("id", "solar-system-planet-Earth");
        planetEarthImg.setAttribute("class", "solar-system-planet");
        planetEarthImg.src = data[0].planetEarth.imageUrl;
        planetEarthImg.alt = "planet_Earth";
        solarSystemContainerDiv.appendChild(planetEarthImg);

        //planetMarsImg.setAttribute("id", "solar-system-planet-Mars");
        planetMarsImg.setAttribute("class", "solar-system-planet");
        planetMarsImg.src = data[0].planetMars.imageUrl;
        planetMarsImg.alt = "planet_Mars";
        solarSystemContainerDiv.appendChild(planetMarsImg);

        //planetJupiterImg.setAttribute("id", "solar-system-planet-Jupiter");
        planetJupiterImg.setAttribute("class", "solar-system-planet");
        planetJupiterImg.src = data[0].planetJupiter.imageUrl;
        planetJupiterImg.alt = "planet_Jupiter";
        solarSystemContainerDiv.appendChild(planetJupiterImg);

        //planetSaturnImg.setAttribute("id", "solar-system-planet-Saturn");
        planetSaturnImg.setAttribute("class", "solar-system-planet");
        planetSaturnImg.src = data[0].planetSaturn.imageUrl;
        planetSaturnImg.alt = "planet_Saturn";
        solarSystemContainerDiv.appendChild(planetSaturnImg);

        //planetUranusImg.setAttribute("id", "solar-system-planet-Uranus");
        planetUranusImg.setAttribute("class", "solar-system-planet");
        planetUranusImg.src = data[0].planetUranus.imageUrl;
        planetUranusImg.alt = "planet_Uranus";
        solarSystemContainerDiv.appendChild(planetUranusImg);

        //planetNeptuneImg.setAttribute("id", "solar-system-planet-Neptune");
        planetNeptuneImg.setAttribute("class", "solar-system-planet");
        planetNeptuneImg.src = data[0].planetNeptune.imageUrl;
        planetNeptuneImg.alt = "planet_Neptune";
        solarSystemContainerDiv.appendChild(planetNeptuneImg);
    }

    function createSelection(): void {
        sunsDiv.setAttribute("id", "suns");
        selectionContainerDiv.appendChild(sunsDiv);

        sunsH1.textContent = "Suns";
        sunsDiv.appendChild(sunsH1);

        selectionYellowSunImg.setAttribute("id", "solar-system-yellow-sun");
        selectionYellowSunImg.setAttribute("class", "selection-sun");
        selectionYellowSunImg.src = data[0].yellowSun.imageUrl;
        selectionYellowSunImg.alt = "yellow_sun";
        sunsDiv.appendChild(selectionYellowSunImg);
        document.querySelector("#solar-system-yellow-sun").addEventListener("click", yellowSunDataFunction);
        function yellowSunDataFunction() {
            console.log(data[0].yellowSun);
        }

        selectionBlueSunImg.setAttribute("id", "solar-system-blue-sun");
        selectionBlueSunImg.setAttribute("class", "selection-sun");
        selectionBlueSunImg.src = data[0].blueSun.imageUrl;
        selectionBlueSunImg.alt = "blue_sun";
        sunsDiv.appendChild(selectionBlueSunImg);
        document.querySelector("#solar-system-blue-sun").addEventListener("click", blueSunDataFunction);
        function blueSunDataFunction() {
            console.log(data[0].blueSun);
        }

        selectionRedSunImg.setAttribute("id", "solar-system-red-sun");
        selectionRedSunImg.setAttribute("class", "selection-sun");
        selectionRedSunImg.src = data[0].redSun.imageUrl;
        selectionRedSunImg.alt = "red_sun";
        sunsDiv.appendChild(selectionRedSunImg);
        document.querySelector("#solar-system-red-sun").addEventListener("click", redSunDataFunction);
        function redSunDataFunction() {
            console.log(data[0].redSun);
        }


        planetsDiv.setAttribute("id", "planets");
        selectionContainerDiv.appendChild(planetsDiv);

        planetsH1.textContent = "Planets";
        planetsDiv.appendChild(planetsH1);

        selectionPlanetMercuryImg.setAttribute("id", "solar-system-planet-mercury");
        selectionPlanetMercuryImg.setAttribute("class", "selection-planet");
        selectionPlanetMercuryImg.src = data[0].planetMercury.imageUrl;
        selectionPlanetMercuryImg.alt = "planet_mercury";
        planetsDiv.appendChild(selectionPlanetMercuryImg);
        document.querySelector("#solar-system-planet-mercury").addEventListener("click", mercuryDataFunction);
        function mercuryDataFunction() {
            console.log(data[0].planetMercury);
        }

        selectionPlanetVenusImg.setAttribute("id", "solar-system-planet-venus");
        selectionPlanetVenusImg.setAttribute("class", "selection-planet");
        selectionPlanetVenusImg.src = data[0].planetVenus.imageUrl;
        selectionPlanetVenusImg.alt = "planet_Venus";
        planetsDiv.appendChild(selectionPlanetVenusImg);
        document.querySelector("#solar-system-planet-venus").addEventListener("click", venusDataFunction);
        function venusDataFunction() {
            console.log(data[0].planetVenus);
        }

        selectionPlanetEarthImg.setAttribute("id", "solar-system-planet-earth");
        selectionPlanetEarthImg.setAttribute("class", "selection-planet");
        selectionPlanetEarthImg.src = data[0].planetEarth.imageUrl;
        selectionPlanetEarthImg.alt = "planet_Earth";
        planetsDiv.appendChild(selectionPlanetEarthImg);
        document.querySelector("#solar-system-planet-earth").addEventListener("click", earthDataFunction);
        function earthDataFunction() {
            console.log(data[0].planetEarth);
        }

        selectionPlanetMarsImg.setAttribute("id", "solar-system-planet-mars");
        selectionPlanetMarsImg.setAttribute("class", "selection-planet");
        selectionPlanetMarsImg.src = data[0].planetMars.imageUrl;
        selectionPlanetMarsImg.alt = "planet_Mars";
        planetsDiv.appendChild(selectionPlanetMarsImg);
        document.querySelector("#solar-system-planet-mars").addEventListener("click", marsDataFunction);
        function marsDataFunction() {
            console.log(data[0].planetMars);
        }

        selectionPlanetJupiterImg.setAttribute("id", "solar-system-planet-jupiter");
        selectionPlanetJupiterImg.setAttribute("class", "selection-planet");
        selectionPlanetJupiterImg.src = data[0].planetJupiter.imageUrl;
        selectionPlanetJupiterImg.alt = "planet_Jupiter";
        planetsDiv.appendChild(selectionPlanetJupiterImg);
        document.querySelector("#solar-system-planet-jupiter").addEventListener("click", jupiterDataFunction);
        function jupiterDataFunction() {
            console.log(data[0].planetJupiter);
        }

        selectionPlanetSaturnImg.setAttribute("id", "solar-system-planet-saturn");
        selectionPlanetSaturnImg.setAttribute("class", "selection-planet");
        selectionPlanetSaturnImg.src = data[0].planetSaturn.imageUrl;
        selectionPlanetSaturnImg.alt = "planet_Saturn";
        planetsDiv.appendChild(selectionPlanetSaturnImg);
        document.querySelector("#solar-system-planet-saturn").addEventListener("click", saturnDataFunction);
        function saturnDataFunction() {
            console.log(data[0].planetSaturn);
        }

        selectionPlanetUranusImg.setAttribute("id", "solar-system-planet-uranus");
        selectionPlanetUranusImg.setAttribute("class", "selection-planet");
        selectionPlanetUranusImg.src = data[0].planetUranus.imageUrl;
        selectionPlanetUranusImg.alt = "planet_Uranus";
        planetsDiv.appendChild(selectionPlanetUranusImg);
        document.querySelector("#solar-system-planet-uranus").addEventListener("click", uranusDataFunction);
        function uranusDataFunction() {
            console.log(data[0].planetUranus);
        }

        selectionPlanetNeptuneImg.setAttribute("id", "solar-system-planet-neptune");
        selectionPlanetNeptuneImg.setAttribute("class", "selection-planet");
        selectionPlanetNeptuneImg.src = data[0].planetNeptune.imageUrl;
        selectionPlanetNeptuneImg.alt = "planet_Neptune";
        planetsDiv.appendChild(selectionPlanetNeptuneImg);
        document.querySelector("#solar-system-planet-neptune").addEventListener("click", neptuneDataFunction);
        function neptuneDataFunction() {
            console.log(data[0].planetNeptune);
        }
    }


    createContainer();
    createSolarSystem();
    createSelection();
}
