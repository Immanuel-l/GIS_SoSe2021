"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Http = require("http");
const Url = require("url");
var Server;
(function (Server) {
    console.log("Starting server"); //Auf der Konsole wird Starting server ausgegeben
    let port = Number(process.env.PORT); //es wird der port festgelegt
    if (!port)
        port = 8100; //wenn es keinen port gibt wird der port auf 8100 gestellt
    let server = Http.createServer(); //es wird ein http server erstellt
    server.addListener("request", handleRequest); //dem server wird ein Listener hinzugefügt der die Anfragen vom Benutzer verarbeitet und eine Antwort zurück an den Benutzer schickt
    server.addListener("listening", handleListen); //dem server wird ein Listener hinzugefügt der abfragt ob der Server grade zuhört
    server.listen(port); //diese Methode lässt den server auf einen bestimmten port hören
    function handleListen() {
        console.log("Listening"); //in der handleListen funktion wird Listening ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Auf der Konsole wird I hear voices ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //die Textsprache wird auf UFT-8 gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //im header wird der Access-Control-Allow-Origin damit jede seite an diese Seite etwas Senden kann
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    console.log(key + ":" + url.query[key]);
                    _response.write(key + ":" + url.query[key]);
                }
            }
            if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.write(_request.url); //die Request url wird in den response geschrieben
        _response.end(); //die response wird beendet
    }
})(Server = exports.Server || (exports.Server = {}));
//# sourceMappingURL=server.js.map