"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pruefungsaufgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    let picutres;
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
        console.log("Database connection ", picutres != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        if (_request.url) {
            if (url.pathname == "/send") {
                for (let key in url.query) {
                    console.log(key + ": " + url.query[key]);
                    _response.write(key + ": " + url.query[key] + " ");
                }
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storeUser(url.query);
            }
        }
        _response.end();
    }
    function storeUser(_picture) {
        picutres.insertOne(_picture);
    }
})(Pruefungsaufgabe = exports.Pruefungsaufgabe || (exports.Pruefungsaufgabe = {}));
//# sourceMappingURL=server.js.map