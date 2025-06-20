const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
app.use(express.static("public"));
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});