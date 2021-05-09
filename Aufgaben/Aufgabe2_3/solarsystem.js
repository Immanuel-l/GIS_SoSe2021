"use strict";
var Aufgabe2_3_2;
(function (Aufgabe2_3_2) {
    let containerDiv = document.createElement("div");
    let solarSystemContainerDiv = document.createElement("div");
    let selectionContainerDiv = document.createElement("div");
    let sunsDiv = document.createElement("div");
    let planetsDiv = document.createElement("div");
    let sunsH1 = document.createElement("h1");
    let planetsH1 = document.createElement("h1");
    let solarSystemImg = document.createElement("img");
    let yellowSunImg = document.createElement("img");
    let blueSunImg = document.createElement("img");
    let redSunImg = document.createElement("img");
    let planetMercuryImg = document.createElement("img");
    let planetVenusImg = document.createElement("img");
    let planetEarthImg = document.createElement("img");
    let planetMarsImg = document.createElement("img");
    let planetJupiterImg = document.createElement("img");
    let planetSaturnImg = document.createElement("img");
    let planetUranusImg = document.createElement("img");
    let planetNeptuneImg = document.createElement("img");
    let selectionYellowSunImg = document.createElement("img");
    let selectionBlueSunImg = document.createElement("img");
    let selectionRedSunImg = document.createElement("img");
    let selectionPlanetMercuryImg = document.createElement("img");
    let selectionPlanetVenusImg = document.createElement("img");
    let selectionPlanetEarthImg = document.createElement("img");
    let selectionPlanetMarsImg = document.createElement("img");
    let selectionPlanetJupiterImg = document.createElement("img");
    let selectionPlanetSaturnImg = document.createElement("img");
    let selectionPlanetUranusImg = document.createElement("img");
    let selectionPlanetNeptuneImg = document.createElement("img");
    function createContainer() {
        containerDiv.setAttribute("id", "container");
        document.body.appendChild(containerDiv);
        solarSystemContainerDiv.setAttribute("id", "solar-system-container");
        containerDiv.appendChild(solarSystemContainerDiv);
        selectionContainerDiv.setAttribute("id", "selection-container");
        containerDiv.appendChild(selectionContainerDiv);
    }
    function createSolarSystem() {
        solarSystemImg.setAttribute("id", "solar-system");
        solarSystemImg.src = Aufgabe2_3_2.data[0].imageUrl;
        solarSystemImg.alt = "solarsystem";
        solarSystemContainerDiv.appendChild(solarSystemImg);
        //yellowSunImg.setAttribute("id", "solar-system-yellow-sun");
        yellowSunImg.setAttribute("class", "solar-system-sun");
        yellowSunImg.src = Aufgabe2_3_2.data[0].yellowSun.imageUrl;
        yellowSunImg.alt = "yellow_sun";
        solarSystemContainerDiv.appendChild(yellowSunImg);
        //blueSunImg.setAttribute("id", "solar-system-blue-sun");
        blueSunImg.setAttribute("class", "solar-system-sun");
        blueSunImg.src = Aufgabe2_3_2.data[0].blueSun.imageUrl;
        blueSunImg.alt = "blue_sun";
        solarSystemContainerDiv.appendChild(blueSunImg);
        //redSunImg.setAttribute("id", "solar-system-red-sun");
        redSunImg.setAttribute("class", "solar-system-sun");
        redSunImg.src = Aufgabe2_3_2.data[0].redSun.imageUrl;
        redSunImg.alt = "red_sun";
        solarSystemContainerDiv.appendChild(redSunImg);
        //planetMercuryImg.setAttribute("id", "solar-system-planet-mercury");
        planetMercuryImg.setAttribute("class", "solar-system-planet");
        planetMercuryImg.src = Aufgabe2_3_2.data[0].planetMercury.imageUrl;
        planetMercuryImg.alt = "planet_mercury";
        solarSystemContainerDiv.appendChild(planetMercuryImg);
        //planetVenusImg.setAttribute("id", "solar-system-planet-Venus");
        planetVenusImg.setAttribute("class", "solar-system-planet");
        planetVenusImg.src = Aufgabe2_3_2.data[0].planetVenus.imageUrl;
        planetVenusImg.alt = "planet_Venus";
        solarSystemContainerDiv.appendChild(planetVenusImg);
        //planetEarthImg.setAttribute("id", "solar-system-planet-Earth");
        planetEarthImg.setAttribute("class", "solar-system-planet");
        planetEarthImg.src = Aufgabe2_3_2.data[0].planetEarth.imageUrl;
        planetEarthImg.alt = "planet_Earth";
        solarSystemContainerDiv.appendChild(planetEarthImg);
        //planetMarsImg.setAttribute("id", "solar-system-planet-Mars");
        planetMarsImg.setAttribute("class", "solar-system-planet");
        planetMarsImg.src = Aufgabe2_3_2.data[0].planetMars.imageUrl;
        planetMarsImg.alt = "planet_Mars";
        solarSystemContainerDiv.appendChild(planetMarsImg);
        //planetJupiterImg.setAttribute("id", "solar-system-planet-Jupiter");
        planetJupiterImg.setAttribute("class", "solar-system-planet");
        planetJupiterImg.src = Aufgabe2_3_2.data[0].planetJupiter.imageUrl;
        planetJupiterImg.alt = "planet_Jupiter";
        solarSystemContainerDiv.appendChild(planetJupiterImg);
        //planetSaturnImg.setAttribute("id", "solar-system-planet-Saturn");
        planetSaturnImg.setAttribute("class", "solar-system-planet");
        planetSaturnImg.src = Aufgabe2_3_2.data[0].planetSaturn.imageUrl;
        planetSaturnImg.alt = "planet_Saturn";
        solarSystemContainerDiv.appendChild(planetSaturnImg);
        //planetUranusImg.setAttribute("id", "solar-system-planet-Uranus");
        planetUranusImg.setAttribute("class", "solar-system-planet");
        planetUranusImg.src = Aufgabe2_3_2.data[0].planetUranus.imageUrl;
        planetUranusImg.alt = "planet_Uranus";
        solarSystemContainerDiv.appendChild(planetUranusImg);
        //planetNeptuneImg.setAttribute("id", "solar-system-planet-Neptune");
        planetNeptuneImg.setAttribute("class", "solar-system-planet");
        planetNeptuneImg.src = Aufgabe2_3_2.data[0].planetNeptune.imageUrl;
        planetNeptuneImg.alt = "planet_Neptune";
        solarSystemContainerDiv.appendChild(planetNeptuneImg);
    }
    function createSelection() {
        sunsDiv.setAttribute("id", "suns");
        selectionContainerDiv.appendChild(sunsDiv);
        sunsH1.textContent = "Suns";
        sunsDiv.appendChild(sunsH1);
        selectionYellowSunImg.setAttribute("id", "solar-system-yellow-sun");
        selectionYellowSunImg.setAttribute("class", "selection-sun");
        selectionYellowSunImg.src = Aufgabe2_3_2.data[0].yellowSun.imageUrl;
        selectionYellowSunImg.alt = "yellow_sun";
        sunsDiv.appendChild(selectionYellowSunImg);
        document.querySelector("#solar-system-yellow-sun").addEventListener("click", yellowSunDataFunction);
        function yellowSunDataFunction() {
            console.log(Aufgabe2_3_2.data[0].yellowSun);
        }
        selectionBlueSunImg.setAttribute("id", "solar-system-blue-sun");
        selectionBlueSunImg.setAttribute("class", "selection-sun");
        selectionBlueSunImg.src = Aufgabe2_3_2.data[0].blueSun.imageUrl;
        selectionBlueSunImg.alt = "blue_sun";
        sunsDiv.appendChild(selectionBlueSunImg);
        document.querySelector("#solar-system-blue-sun").addEventListener("click", blueSunDataFunction);
        function blueSunDataFunction() {
            console.log(Aufgabe2_3_2.data[0].blueSun);
        }
        selectionRedSunImg.setAttribute("id", "solar-system-red-sun");
        selectionRedSunImg.setAttribute("class", "selection-sun");
        selectionRedSunImg.src = Aufgabe2_3_2.data[0].redSun.imageUrl;
        selectionRedSunImg.alt = "red_sun";
        sunsDiv.appendChild(selectionRedSunImg);
        document.querySelector("#solar-system-red-sun").addEventListener("click", redSunDataFunction);
        function redSunDataFunction() {
            console.log(Aufgabe2_3_2.data[0].redSun);
        }
        planetsDiv.setAttribute("id", "planets");
        selectionContainerDiv.appendChild(planetsDiv);
        planetsH1.textContent = "Planets";
        planetsDiv.appendChild(planetsH1);
        selectionPlanetMercuryImg.setAttribute("id", "solar-system-planet-mercury");
        selectionPlanetMercuryImg.setAttribute("class", "selection-planet");
        selectionPlanetMercuryImg.src = Aufgabe2_3_2.data[0].planetMercury.imageUrl;
        selectionPlanetMercuryImg.alt = "planet_mercury";
        planetsDiv.appendChild(selectionPlanetMercuryImg);
        document.querySelector("#solar-system-planet-mercury").addEventListener("click", mercuryDataFunction);
        function mercuryDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetMercury);
        }
        selectionPlanetVenusImg.setAttribute("id", "solar-system-planet-venus");
        selectionPlanetVenusImg.setAttribute("class", "selection-planet");
        selectionPlanetVenusImg.src = Aufgabe2_3_2.data[0].planetVenus.imageUrl;
        selectionPlanetVenusImg.alt = "planet_Venus";
        planetsDiv.appendChild(selectionPlanetVenusImg);
        document.querySelector("#solar-system-planet-venus").addEventListener("click", venusDataFunction);
        function venusDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetVenus);
        }
        selectionPlanetEarthImg.setAttribute("id", "solar-system-planet-earth");
        selectionPlanetEarthImg.setAttribute("class", "selection-planet");
        selectionPlanetEarthImg.src = Aufgabe2_3_2.data[0].planetEarth.imageUrl;
        selectionPlanetEarthImg.alt = "planet_Earth";
        planetsDiv.appendChild(selectionPlanetEarthImg);
        document.querySelector("#solar-system-planet-earth").addEventListener("click", earthDataFunction);
        function earthDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetEarth);
        }
        selectionPlanetMarsImg.setAttribute("id", "solar-system-planet-mars");
        selectionPlanetMarsImg.setAttribute("class", "selection-planet");
        selectionPlanetMarsImg.src = Aufgabe2_3_2.data[0].planetMars.imageUrl;
        selectionPlanetMarsImg.alt = "planet_Mars";
        planetsDiv.appendChild(selectionPlanetMarsImg);
        document.querySelector("#solar-system-planet-mars").addEventListener("click", marsDataFunction);
        function marsDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetMars);
        }
        selectionPlanetJupiterImg.setAttribute("id", "solar-system-planet-jupiter");
        selectionPlanetJupiterImg.setAttribute("class", "selection-planet");
        selectionPlanetJupiterImg.src = Aufgabe2_3_2.data[0].planetJupiter.imageUrl;
        selectionPlanetJupiterImg.alt = "planet_Jupiter";
        planetsDiv.appendChild(selectionPlanetJupiterImg);
        document.querySelector("#solar-system-planet-jupiter").addEventListener("click", jupiterDataFunction);
        function jupiterDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetJupiter);
        }
        selectionPlanetSaturnImg.setAttribute("id", "solar-system-planet-saturn");
        selectionPlanetSaturnImg.setAttribute("class", "selection-planet");
        selectionPlanetSaturnImg.src = Aufgabe2_3_2.data[0].planetSaturn.imageUrl;
        selectionPlanetSaturnImg.alt = "planet_Saturn";
        planetsDiv.appendChild(selectionPlanetSaturnImg);
        document.querySelector("#solar-system-planet-saturn").addEventListener("click", saturnDataFunction);
        function saturnDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetSaturn);
        }
        selectionPlanetUranusImg.setAttribute("id", "solar-system-planet-uranus");
        selectionPlanetUranusImg.setAttribute("class", "selection-planet");
        selectionPlanetUranusImg.src = Aufgabe2_3_2.data[0].planetUranus.imageUrl;
        selectionPlanetUranusImg.alt = "planet_Uranus";
        planetsDiv.appendChild(selectionPlanetUranusImg);
        document.querySelector("#solar-system-planet-uranus").addEventListener("click", uranusDataFunction);
        function uranusDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetUranus);
        }
        selectionPlanetNeptuneImg.setAttribute("id", "solar-system-planet-neptune");
        selectionPlanetNeptuneImg.setAttribute("class", "selection-planet");
        selectionPlanetNeptuneImg.src = Aufgabe2_3_2.data[0].planetNeptune.imageUrl;
        selectionPlanetNeptuneImg.alt = "planet_Neptune";
        planetsDiv.appendChild(selectionPlanetNeptuneImg);
        document.querySelector("#solar-system-planet-neptune").addEventListener("click", neptuneDataFunction);
        function neptuneDataFunction() {
            console.log(Aufgabe2_3_2.data[0].planetNeptune);
        }
    }
    createContainer();
    createSolarSystem();
    createSelection();
})(Aufgabe2_3_2 || (Aufgabe2_3_2 = {}));
//# sourceMappingURL=solarsystem.js.map