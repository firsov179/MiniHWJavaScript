const WebSocket = require('ws');
var socket = new WebSocket('ws://localhost:7007');

var data = ["Hi! My name is Alice!", "Hello! I'm Bob.", "Microsoft Corporation."]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

socket.onopen = function () {
    console.log('подключился');
};
socket.onmessage = function (message) {
    console.log('Сервер прислал: "%s"', message.data);
};

socket.on('close', function() {
    console.log('Сервер отключился');
    process.exit();
});

socket.onopen = function(e) {

    socket.send(data[getRandomInt(3)]);
};
