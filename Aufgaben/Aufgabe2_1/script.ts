//#Aufgabe_1a
/*
Konsolen Ausgabe: 
Alles
Klar?
Logo!
*/

function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

/*
- Nur Zahlen in Variablen oder Funktionen zu benutzen ist nicht erlaubt. z.B. function 1()
- Man darf die Variablen nicht so nennen wie Variablen die schon existieren wie z.B. void oder console
*/

//#Aufgabe_1b
/*
- Zuerst wird in wegen dem console.log(x) die variable x ausgegeben also: Alles
- Im nächsten Schritt wird die func1() ausgeführt also console.log("Klar?") wird Klar? ausgegeben.
- Da im nächsten Schritt die func1() vorbei ist wird jetzt console.log("Logo!") wird Logo! ausgegeben.
*/

//#Aufgabe_1c

function func2(): void {
    console.log("Gute!");
}

//#Aufgabe_2
/*
- Zuerst wird in der Konsole 9 Ausgegeben
- dann wird von i eins abgezogen also in der Konsole 8 Ausgegeben
- wegen der while schleife geht das dann so weiter also die Zahlen 7 6 5 4 3 2 1 werden untereinander ausgegeben
- da die nächste Zahl die 0 wäre, die 0 aber nicht größer als 0 ist, ist die fuction nun zuende die 0 wird nicht mehr ausgegeben!. 
*/

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();

//meine Annahmen scheinen richtig zu sein


//#Aufgabe_3
/*
- Wenn man bei der function a2() do not anstatt nur do schreibt wird einem jede geschweifte klammer und jedes symikolon als error angezeigt aber nicht einfach das man not zu entfernen soll. (do not)
- Wenn man bei der function a1() bei void ein leerzeichen reinschreibt erkennnt man besser das es um das Void geht aber trotzdem wird von dem programm eher eine geschweifte klammer oder ein
  symikolon angezeigt an dem es liegen soll. (v oid)
*/

//#Aufgabe_4a
/*
- Zuerst wird doch console.log(x) Hallo ausgegeben
- Dann wird die Funktion func1(x) aufgerufen, die Bla ausgibt
- Als Nächstes wird wieder console.log(x) aufgerufen was wieder Hallo ausgibt
- Jetzt wird die Funktion func2() aufgerufen, die Blubb ausgibt
- Als Letztes wird die Funktion func3() aufgerufen, die die Variable x in Test umändert wird und mit console(x) wird dann Test ausgegeben
*/

let x: string = "Hallo";
console.log(x);
func3(x);
console.log(x);
func4();
func5();
console.log(x);

function func3(y: string): void {
    y = "Bla";
    console.log(y);
}

function func4(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func5(): void {
    x = "Test";
}

//meine Annahmen scheinen wieder richtig zu sein

//ich musste die Variablen Namen ändern, da sie in den Vorherigen Aufgaben schonmal verwendet wurden mein Text aus Aufgabe_4a bezieht sich aber auf die Variablen aus der gestellten Aufgabe 4 aus Felix

//Aufgabe_4b
/*
- globale Variablen beziehen sich auf die ganze Datei und lokale Variablen beziehen sich nur auf die Funktion in der sie sich befinden.
- Eine Funktion kann man ausführen und einen Anweisung oder Werte übergeben.
- Einen String in dem z.B. Hallo steht kann man immer wieder verändern indem man ihn wie in Aufgabe 4 einfach ändern in z.B. Test.
*/

//Aufgabe_5a

console.log(multiplay(2, 5));

function multiplay(zahl1: number, zahl2: number): number {
    let ergebnis: number = 0;
    ergebnis = zahl1 * zahl2;
    return ergebnis;
}

//Aufgabe_5b

console.log(max(8, 8));

function max(zahl1: number, zahl2: number): number {
    let ergebnis: number = 0;
    if (zahl1 >= zahl2) {
        ergebnis = zahl1;
    }
    if (zahl2 >= zahl1) {
        ergebnis = zahl2;
    }
    return ergebnis;
}

//Aufgabe_5c
let zahl: number = 0;
let ergebnis: number = 0;

while (zahl < 100) {
    zahl++;
    ergebnis += zahl;
}

console.log(ergebnis);

//Aufgabe_5d

for (let i: number = 0; i < 10; i++) {
    let random: number = (Math.random() * 100) + 1;
    console.log(random);
}

//Aufgabe_5e

console.log(factorial(4));

function factorial(n: number): number {
    if ( n <= 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}

//Aufgabe_5f

console.log(leapyears());

function leapyears(): void {
    let schaltJahr: number = 0;
    let jahr: number = 1900;

    while (jahr < 2021) {

        if (jahr % 4 == 0) {
            if (jahr % 100 == 0) {
                if ( jahr % 400 == 0) {
                    schaltJahr = jahr;
                    console.log(schaltJahr);
                }
            } else {
                schaltJahr = jahr;
                console.log(schaltJahr);
            }
        }

        jahr++;

    }
}


//Aufgabe_6a

let doppelkreuz: String = "";

for (let i: number = 0; i < 7; i++) {
    doppelkreuz += "\n";   
    for (let j: number = 0; j <= i; j++) {
        doppelkreuz += "#";   
    }
    
}

console.log(doppelkreuz);


//Aufgabe_6b

let zahlForB: number = 0;

while (zahlForB < 100) {
    zahlForB++;
    if (zahlForB % 3 == 0) {
        console.log("Fizz");
    }
    if (zahlForB % 5 == 0) {
        if (zahlForB % 3 != 0) {
            console.log("Buzz");
        }
    }

    if (zahlForB % 3 != 0 && zahlForB % 5 != 0) {
        console.log(zahlForB);
    }
}

//Aufgabe_6c

let zahlFB: number = 0;

while (zahlFB < 100) {
    zahlFB++;

    if (zahlFB % 3 != 0 && zahlFB % 5 != 0) {
        console.log(zahlFB);
    } 
    else if (zahlFB % 3 == 0 && zahlFB % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (zahlFB % 3 == 0) {
        console.log("Fizz");
    }
    else if (zahlFB % 5 == 0) {
        if (zahlFB % 3 != 0) {
            console.log("Buzz");
        }
    }


}

//Aufgabe_6d

let schachRaute: string = "";

function schachbrett(): string {
    for (let i: number = 0; i < 8; i++) {
        schachRaute += "\n";
        for (let j: number = 0; j < 4; j++) {
            if (i % 2 == 0) {
                schachRaute += " #";
            } else {
                schachRaute += "# ";
            }
        }
    }
    return schachRaute;
}

console.log(schachbrett());

//Aufgabe_6f

let schachRaute2: string = "";

function schachbrett2(hohe: number, breite: number): string {
    for (let i: number = 0; i < hohe; i++) {
        schachRaute2 += "\n";
        for (let j: number = 0; j < breite; j++) {
            if (i % 2 == 0) {
                schachRaute2 += " #";
            } else {
                schachRaute2 += "# ";
            }
        }
    }
    return schachRaute2;
}

console.log(schachbrett2(12, 8));