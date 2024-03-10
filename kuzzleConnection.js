const { Kuzzle, WebSocket } = require('kuzzle-sdk');

const kuzzle = new Kuzzle(
    new WebSocket('localhost')
);

async function connectToKuzzle() {
    try {
        await kuzzle.connect();
        console.log('Connected to Kuzzle successfully');
    } catch (error) {
        console.error(`Failed to connect to Kuzzle: ${error.message}`);
    }
}

module.exports = connectToKuzzle;