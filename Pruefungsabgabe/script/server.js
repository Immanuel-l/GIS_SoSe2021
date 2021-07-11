"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pruefungsaufgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    let picutres;
    let highscores;
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    connectToDB("mongodb+srv://Immanuel:ORmcWgGE1t3y@immanuel-gis-cluster.evslb.mongodb.net/Pruefungsaufgabe?retryWrites=true&w=majority");
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        picutres = mongoClient.db("Pruefungsaufgabe").collection("Pictures");
        highscores = mongoClient.db("Pruefungsaufgabe").collection("Highscores");
        console.log("Database connection ", picutres != undefined);
        console.log("Database connection ", highscores != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/addpicture") {
                if (await picutres.findOne({ "pictureUrl": url.query.pictureUrl })) {
                    _response.write("Url is already used!");
                }
                else if (await picutres.findOne({ "pictureName": url.query.pictureName })) {
                    _response.write("Name is already used!");
                }
                else if (url.query.pictureUrl == "") {
                    _response.write("Url is empty!");
                }
                else if (url.query.pictureName == "") {
                    _response.write("Name is empty!");
                }
                else {
                    picutres.insertOne({ "pictureUrl": url.query.pictureUrl, "pictureName": url.query.pictureName });
                }
            }
            if (url.pathname == "/showpictures") {
                let data = await picutres.find().toArray();
                let jsonData = JSON.stringify(data);
                _response.write(jsonData);
            }
            if (url.pathname == "/delete") {
                let search = new URL(_request.url, "https://immanuelgis.herokuapp.com/");
                picutres.deleteOne({ "pictureName": search.searchParams.get("pictureName") });
            }
            if (url.pathname == "/showhighscores") {
                let data = await highscores.find().sort({ "userscore": -1 }).limit(10).toArray();
                let jsonData = JSON.stringify(data);
                _response.write(jsonData);
            }
            if (url.pathname == "/adduserscore") {
                let userscoreString = url.query.userscore.toString();
                if (url.query.username == "") {
                    _response.write("Username is empty!");
                }
                else if (url.query.userscore == "") {
                    _response.write("Userscore is empty!");
                }
                else {
                    highscores.insertOne({ "username": url.query.username, "userscore": parseInt(userscoreString) });
                }
            }
            if (url.pathname == "/loadurls") {
                let data = await picutres.find().toArray();
                let jsonData = JSON.stringify(data);
                _response.write(jsonData);
            }
        }
        _response.end();
    }
})(Pruefungsaufgabe = exports.Pruefungsaufgabe || (exports.Pruefungsaufgabe = {}));
//# sourceMappingURL=server.js.map