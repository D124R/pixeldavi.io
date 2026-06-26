const WebSocket = require('ws');
const { users } = require('./lib/mockData');

const PORT = process.env.SOCKET_PORT || 4000;
const wss = new WebSocket.Server({ port: PORT });

function broadcast(data) {
  const payload = typeof data === 'string' ? data : JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.send(payload);
  });
}

wss.on('connection', function connection(ws) {
  ws.send(JSON.stringify({ type: 'welcome', message: 'Connected to ANPEX chat server' }));

  ws.on('message', function incoming(message) {
    try {
      const msg = JSON.parse(message);
      if (msg.type === 'message') {
        const out = {
          type: 'message',
          authorId: msg.authorId || 'anonymous',
          text: msg.text,
          createdAt: new Date().toISOString()
        };
        broadcast(out);
      }
    } catch (err) {
      console.error('Invalid message', err);
    }
  });
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);
