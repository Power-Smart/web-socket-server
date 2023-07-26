import express from "express";
import { wss } from "../init.js";

const router = express.Router();

router.get("/", function (req, res) {
    console.log("Event: main event (/get) ");
    wss.clients.forEach(function each(client) {
        client.send("From Server (/get)");
    });
    res.sendStatus(200);
});

router.post("/", function (req, res) {
    let message = req.body.message;
    console.log("Event: main event (/post) :", message);
    wss.clients.forEach(function each(client) {
        client.send(message);
    });
    res.sendStatus(200);
});

export default router;
