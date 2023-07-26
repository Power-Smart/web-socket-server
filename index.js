import express from "express";
import { wss } from "./init.js";

// routes
import mainRoute from "./routes/main.route.js";

const app = express();
app.use(express.json());

const server = app.listen(4001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(
        "Websocket event broadcaster REST API listening on http://%s:%s",
        host,
        port
    );
});

// routes
app.use("/", mainRoute);

// websocket listening mode
wss.on("connection", function connection(ws) {
    console.log("Websocket client connected");
    ws.on("message", function incoming(message) {
        console.log("received: %s", message);
    });
    ws.on("close", function close() {
        console.log("Websocket client disconnected");
    });
    ws.send("connected");
});
