import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Server {
    let students: Mongo.Collection;

    interface Student {
        [type: string]: string | string[];
    }

    console.log("Starting server"); //Auf der Konsole wird Starting server ausgegeben
    let port: number = Number(process.env.PORT); //es wird der port festgelegt
    if (!port)
        port = 8100;  //wenn es keinen port gibt wird der port auf 8100 gestellt

    //connectToDB("mongodb://localhost:27017");
    connectToDB("mongodb+srv://Immanuel:ORmcWgGE1t3y@immanuel-gis-cluster.evslb.mongodb.net/Test?retryWrites=true&w=majority");
    // connectToDB();

    let server: Http.Server = Http.createServer(); //es wird ein http server erstellt
    server.addListener("request", handleRequest); //dem server wird ein Listener hinzugefügt der die Anfragen vom Benutzer verarbeitet und eine Antwort zurück an den Benutzer schickt
    server.addListener("listening", handleListen); //dem server wird ein Listener hinzugefügt der abfragt ob der Server grade zuhört
    server.listen(port); //diese Methode lässt den server auf einen bestimmten port hören

    function handleListen(): void {
        console.log("Listening"); //in der handleListen funktion wird Listening ausgegeben
    }


    async function connectToDB(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
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


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!"); //Auf der Konsole wird I hear voices ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //die Textsprache wird auf UFT-8 gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //im header wird der Access-Control-Allow-Origin damit jede seite an diese Seite etwas Senden kann

        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        if (_request.url) {
            if (url.pathname == "/send") {
                for (let key in url.query) {
                    console.log(key + ": " + url.query[key]);
                    _response.write(key + ": " + url.query[key] + " ");
                }

                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);

                storeStudent(url.query);
            }
            if (url.pathname == "/request") {
                // let cursor: Mongo.Cursor = students.find();
                // let result: string[] = await cursor.toArray(); 
                // console.log(result);    
                let data: string[] = await students.find().toArray();
                let jsonData: string = JSON.stringify(data);
                _response.write(jsonData);
            }
        }
        _response.end(); //die response wird beendet
    }


    function storeStudent(_student: Student): void {
        students.insertOne(_student);
    }
}
