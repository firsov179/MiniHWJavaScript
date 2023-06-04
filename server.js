const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 7007});

wsServer.on('connection', onConnect);

function sendMessage(wsClient, message, i) {
    if (i ===  message.length) {
        wsClient.close();
        return 0;
    }
    setTimeout(() => {
        wsClient.send(message.toString().charAt(i));
    }, 1000);
    setTimeout(() => {
        sendMessage(wsClient, message, i + 1);
    }, 1000);
}


function onConnect(wsClient) {
    console.log('Новый пользователь.');

    wsClient.on('message', function (message) {
        sendMessage(wsClient, message, 0)
    });
    console.log('Пользователь отключился.');
}
