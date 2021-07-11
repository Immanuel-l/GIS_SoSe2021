import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Pruefungsaufgabe {
    let picutres: Mongo.Collection;

    interface Picture {
        [type: string]: string | string[];
    }

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    connectToDB("mongodb+srv://Immanuel:ORmcWgGE1t3y@immanuel-gis-cluster.evslb.mongodb.net/Pruefungsaufgabe?retryWrites=true&w=majority");

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    async function connectToDB(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        picutres = mongoClient.db("Pruefungsaufgabe").collection("Pictures");
        console.log("Database connection ", picutres != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        if (_request.url) {

            if (url.pathname == "/send") {
                for (let key in url.query) {
                    console.log(key + ": " + url.query[key]);
                    _response.write(key + ": " + url.query[key] + " ");
                }

                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);

                storeUser(url.query);
            }
        }
        _response.end();
    }

    function storeUser(_picture: Picture): void {
        picutres.insertOne(_picture);
    }
}