namespace Aufgabe2_4 {
    export interface SolarSystemPart {
        image: string;
        name: string;
    }

    export interface SolarSystem {
        suns: SolarSystemPart[];
        planets: SolarSystemPart [];
        comets: SolarSystemPart [];
    }

    export interface Selection {
        sun: SolarSystemPart;
        planet: SolarSystemPart;
        comet: SolarSystemPart;
    }

    export let partsJSON: string =
    `
    {
        "suns": [
            {
                "image": "./bilder/yellow_sun.svg",
                "name": "Yellow Sun"
            },
            {
                "image": "./bilder/blue_sun.svg",
                "name": "Blue Sun"
            },
            {
                "image": "./bilder/red_sun.svg",
                "name": "Red Sun"
            }
        ],
        "planets": [
            {
                "image": "./bilder/planet_mercury.svg",
                "name": "Mercury"
            },
            {
                "image": "./bilder/planet_venus.svg",
                "name": "Venus"
            },
            {
                "image": "./bilder/planet_earth.svg",
                "name": "Earth"
            },
            {
                "image": "./bilder/planet_mars.svg",
                "name": "Mars"
            },
            {
                "image": "./bilder/planet_jupiter.svg",
                "name": "Jupiter"
            },
            {
                "image": "./bilder/planet_saturn.svg",
                "name": "Saturn"
            },
            {
                "image": "./bilder/planet_uranus.svg",
                "name": "Uranus"
            },
            {
                "image": "./bilder/planet_neptune.svg",
                "name": "Neptune"
            }   
        ],
        "comets": [
            {
                "image": "./bilder/comet_1.svg",
                "name": "Comet1"
            },
            {
                "image": "./bilder/comet_2.svg",
                "name": "Comet2"
            },
            {
                "image": "./bilder/comet_3.svg",
                "name": "Comet3"
            }
        ]
    }
    `;

    export let parts: SolarSystem = JSON.parse(partsJSON);
}