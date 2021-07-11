import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Pruefungsaufgabe {
    let picutres: Mongo.Collection;
    let highscores: Mongo.Collection;

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
        highscores = mongoClient.db("Pruefungsaufgabe").collection("Highscores");
        console.log("Database connection ", picutres != undefined);
        console.log("Database connection ", highscores != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/addpicture") {
                if (await picutres.findOne({"pictureUrl": url.query.pictureUrl})) {
                    _response.write("Url is already used!");
                }
                else if (await picutres.findOne({"pictureName": url.query.pictureName})) {
                    _response.write("Name is already used!");
                } 
                else {
                    picutres.insertOne({"pictureUrl": url.query.pictureUrl, "pictureName": url.query.pictureName});
                }
            }

            if (url.pathname == "/showpictures") {
                let data: string[] = await picutres.find().toArray();
                let jsonData: string = JSON.stringify(data);
                _response.write(jsonData);
            }

            if (url.pathname == "/delete") {
                let search: URL = new URL(_request.url, "https://immanuelgis.herokuapp.com/");
                picutres.deleteOne({"pictureName": search.searchParams.get("pictureName")});
            }

            if (url.pathname == "/showhighscores") {
                let data: string[] = await highscores.find().sort({"userscore": -1}).toArray();
                let jsonData: string = JSON.stringify(data);
                _response.write(jsonData);
            }

            if (url.pathname == "/adduserscore") {
                highscores.insertOne({"username": url.query.username, "userscore": url.query.userscore});
            }
        }
        _response.end();
    }
}