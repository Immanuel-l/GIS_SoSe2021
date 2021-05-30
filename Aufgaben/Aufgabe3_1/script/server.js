"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
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
        _response.write(_request.url); //die Request url wird in den response geschrieben
        _response.end(); //die response wird beendet
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map