namespace Aufgabe2_2 {

    //#Aufgabe_1a
    function min(_minArray: number[]): number {
        return Math.min.apply(Math, _minArray);
    }

    console.log(min([7, 5, 12, 2, 53, 64, 14, 8, 64]));

    //#Aufgabe_1b
    function isEven(_even: number): boolean {
        let result: number = 0;

        if (_even < 0) {
            return false;
        }

        if (_even == 0) {
            return true;
        }
        if (_even == 1) {
            return false;
        }
        result = _even - 2;
        return isEven(result);


    }

    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));
    //Hier entsteht ein StackOverflow weil bei -1 das ergebnis durch die Rekrusion in dieser Funktion niemals 0 oder 1 werden kann.

    //Aufgabe_1c
    /*interface Student {
        name: string;
        firstName: string;
        age: number;
        matriculationNumber: number;
        semester: number;
    }

    let s1: Student = {name: "Leinert", firstName: "Immanuel", age: 19, matriculationNumber: 266573, semester: 2};
    let s2: Student = {name: "Koch", firstName: "Günter", age: 21, matriculationNumber: 265625, semester: 2};
    let s3: Student = {name: "Richter", firstName: "Paul", age: 20, matriculationNumber: 262581, semester: 2};

    let studentArray: Student[] = [];
    studentArray.push(s1, s2, s3, {name: "Krause", firstName: "Otto", age: 20, matriculationNumber: 254252, semester: 2});

    console.log(s1.firstName);
    console.log(s2.matriculationNumber);
    console.log(s3.name);
    console.log(s2.semester);
    console.log(s1.age);
    
    function showInfo(_student: Student): string {
        return _student.name + " " + _student.firstName + " " + _student.age + " " + _student.matriculationNumber + " " + _student.semester;
    }

    console.log(showInfo(s1));
    console.log(showInfo(s2));
    console.log(showInfo(s3));
    */


    class Student {
        public name: string;
        public firstName: string;
        public age: number;
        public matriculationNumber: number;
        public semester: number;

        constructor(_name: string, _firstName: string, _age: number, _matriculationNumber: number, _semester: number) {
            this.name = _name;
            this.firstName = _firstName;
            this.age = _age;
            this.matriculationNumber = _matriculationNumber;
            this.semester = _semester;
        }

        public showInfo(_student: Student): String {
            return _student.name + " " + _student.firstName + " " + _student.age + " " + _student.matriculationNumber + " " + _student.semester;
        }

    }



    let s1: Student = new Student("Leinert", "Immanuel", 19, 266573, 2);
    let s2: Student = new Student("Koch", "Günter", 21, 265625, 2);
    let s3: Student = new Student("Richter", "Paul", 20, 262581, 2);
    console.log(s1.showInfo(s1));
    console.log(s2.showInfo(s2));
    console.log(s3.showInfo(s3));

    let studentArray: Student[] = [];
    studentArray.push(s1, s2, s3);


    //Aufgabe_2a

    function backwards(_backArray: number[]): number[] {
        let resultArray: number[] = [];
        for (let i: number = _backArray.length - 1; i >= 0; i--) {
            resultArray.push(_backArray[i]);
        }
        return resultArray;
    }

    console.log(backwards([0, 5, 2, 10, 5]));

    //Aufgabe_2b

    function join(_joinArrayA: number[], _joinArrayB: number[]): number[] {
        let resultArray: number[] = [];
        for (let i: number = 0; i < _joinArrayA.length; i++) {
            resultArray.push(_joinArrayA[i]);
        }
        for (let j: number = 0; j < _joinArrayB.length; j++) {
            resultArray.push(_joinArrayB[j]);
        }

        return resultArray;
    }

    console.log(join([0, 2, 5, 6], [4, 7, 1, 8]));

    //Aufgabe_2c

    function split(_splitArray: number[], _indexNumber1: number, _indexNumber2: number): number[] {
        let resultArray: number[] = [];
        resultArray = _splitArray.slice(_indexNumber1, _indexNumber2);
        return resultArray;
    }

    console.log(split([2, 7, 2, 8, 12, 1], 0, 3));


    let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack: number[] = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440]));
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));

    //Aufgabe_3a

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    let blueGardient: CanvasGradient = context.createLinearGradient(50, 200, 400, 500);
    blueGardient.addColorStop(0, "lightblue");
    blueGardient.addColorStop(1, "blue");


    context.lineWidth = 5;

    //Himmel
    context.fillStyle = blueGardient;
    context.fillRect(0, 0, 800, 180);

    //Boden
    context.fillStyle = "green";
    context.fillRect(0, 550, 800, 50);

    //Hauswände
    context.strokeRect(75, 440, 150, 110);

    //Tür
    context.fillStyle = "black";
    context.fillRect(130, 490, 40, 60);

    //Hausdach
    context.beginPath();
    context.moveTo(50, 440);
    context.lineTo(150, 360);
    context.lineTo(250, 440);
    context.closePath();
    context.stroke();

    //Wolke1
    context.beginPath();
    context.fillStyle = "white";
    context.arc(315, 70, 30, 0, 2 * Math.PI, false);
    context.moveTo(300, 100);
    context.lineTo(450, 100);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(450, 70, 30, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(420, 65, 35, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(350, 62, 37, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(385, 65, 32, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    //Wolke2
    context.beginPath();
    context.fillStyle = "white";
    context.arc(515, 50, 30, 0, 2 * Math.PI, false);
    context.moveTo(500, 80);
    context.lineTo(650, 80);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(650, 50, 30, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(620, 45, 35, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(550, 42, 37, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(585, 45, 32, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    //Wolke3
    context.beginPath();
    context.fillStyle = "white";
    context.arc(115, 90, 30, 0, 2 * Math.PI, false);
    context.moveTo(100, 120);
    context.lineTo(250, 120);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(250, 90, 30, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(220, 85, 35, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(150, 82, 37, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(185, 85, 32, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();

    //Baumstamm
    context.fillStyle = "brown";
    context.fillRect(400, 350, 50, 200);

    //Baumkrone
    context.fillStyle = "lightgreen";
    context.beginPath();
    context.arc(425, 300, 100, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();


    //Aufgabe_3b

    // interface Rectangle {
    //     positionX: number;
    //     positionY: number;
    //     width: number;
    //     height: number;
    // }


    //Aufgabe_3c


    // function createRect(): Rectangle {
    //     let randomX: number = Math.floor(Math.random() * 500);
    //     let randomY: number = Math.floor(Math.random() * 400);
    //     let randomWidth: number = Math.floor(Math.random() * 500);
    //     let randomHeight: number = Math.floor(Math.random() * 400);

    //     return {positionX: randomX, positionY: randomY, width: randomWidth, height: randomHeight};
    // }

    //Aufgabe_3d

    // function drawRect(randomRectangle: Rectangle): void {
    //     context.fillStyle = "pink";
    //     context.fillRect(randomRectangle.positionX, randomRectangle.positionY, randomRectangle.width, randomRectangle.height);
    //     context.stroke;
    // }

    // //Aufgabe_3e

    // let rectangleArray: Rectangle[] = [];
    // rectangleArray.push(drawRect(createRect()), drawRect(createRect()), drawRect(createRect()));


}