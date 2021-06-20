"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Server;
(function (Server) {
    let students;
    console.log("Starting server"); //Auf der Konsole wird Starting server ausgegeben
    let port = Number(process.env.PORT); //es wird der port festgelegt
    if (!port)
        port = 8100; //wenn es keinen port gibt wird der port auf 8100 gestellt
    //connectToDB("mongodb://localhost:27017");
    connectToDB("mongodb+srv://Immanuel:ORmcWgGE1t3y@immanuel-gis-cluster.evslb.mongodb.net/Test?retryWrites=true&w=majority");
    // connectToDB();
    let server = Http.createServer(); //es wird ein http server erstellt
    server.addListener("request", handleRequest); //dem server wird ein Listener hinzugefügt der die Anfragen vom Benutzer verarbeitet und eine Antwort zurück an den Benutzer schickt
    server.addListener("listening", handleListen); //dem server wird ein Listener hinzugefügt der abfragt ob der Server grade zuhört
    server.listen(port); //diese Methode lässt den server auf einen bestimmten port hören
    function handleListen() {
        console.log("Listening"); //in der handleListen funktion wird Listening ausgegeben
    }
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection ", students != undefined);
    }
    // async function connectToDB(): Promise<void> {
    //     const MongoClient = require("mongodb").MongoClient;
    //     const uri = "mongodb+srv://Immanuel:ORmcWgGE1t3y@immanuel-gis-cluster.evslb.mongodb.net/Test?retryWrites=true&w=majority";
    //     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //     client.connect(err => {
    //     orders = client.db("Test").collection("Students");
    //     // perform actions on the collection object
    //     client.close();
    //     });
    //     console.log("Database connection ", orders != undefined);
    // }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Auf der Konsole wird I hear voices ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //die Textsprache wird auf UFT-8 gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //im header wird der Access-Control-Allow-Origin damit jede seite an diese Seite etwas Senden kann
        let url = Url.parse(_request.url, true);
        if (_request.url) {
            let q = new URL(_request.url, "https://immanuelgis.herokuapp.com/");
            if (url.pathname == "/send") {
                for (let key in url.query) {
                    console.log(key + ": " + url.query[key]);
                    _response.write(key + ": " + url.query[key] + " ");
                }
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storeStudent(url.query);
            }
            if (url.pathname == "/request") {
                // let cursor: Mongo.Cursor = students.find();
                // let result: string[] = await cursor.toArray(); 
                // console.log(result);    
                let data = await students.find().toArray();
                let jsonData = JSON.stringify(data);
                _response.write(jsonData);
            }
            if (url.pathname == "/delete") {
                students.deleteOne({ _search: new Mongo.ObjectId(q.searchParams.get("matrikelnummer")) });
            }
        }
        _response.end(); //die response wird beendet
    }
    function storeStudent(_student) {
        students.insertOne(_student);
    }
})(Server = exports.Server || (exports.Server = {}));
//# sourceMappingURL=server.js.map