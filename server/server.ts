import * as Http from "http";
import * as url from "url";

export namespace P_3_1Server {
    console.log("Starting server"); //Auf der Konsole wird Starting server ausgegeben
    let port: number = Number(process.env.PORT); //es wird der port festgelegt
    if (!port)
        port = 8100;  //wenn es keinen port gibt wird der port auf 8100 gestellt

    let server: Http.Server = Http.createServer(); //es wird ein http server erstellt
    server.addListener("request", handleRequest); //dem server wird ein Listener hinzugefügt der die Anfragen vom Benutzer verarbeitet und eine Antwort zurück an den Benutzer schickt
    server.addListener("listening", handleListen); //dem server wird ein Listener hinzugefügt der abfragt ob der Server grade zuhört
    server.listen(port); //diese Methode lässt den server auf einen bestimmten port hören

    function handleListen(): void {
        console.log("Listening"); //in der handleListen funktion wird Listening ausgegeben
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Auf der Konsole wird I hear voices ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //die Textsprache wird auf UFT-8 gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //im header wird der Access-Control-Allow-Origin damit jede seite an diese Seite etwas Senden kann
        _response.write(_request.url); //die Request url wird in den response geschrieben
        _response.end(); //die response wird beendet
    }
    
    let adresse: string = "http://immanuelgis.herokuapp.com/default.htm?jahr=2017&monat=february";
    //Adresse parsen (umwandeln):
    let q: url.UrlWithParsedQuery = url.parse(adresse, true);

    /*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
    var qdata = q.query;
    console.log(qdata.monat);
}