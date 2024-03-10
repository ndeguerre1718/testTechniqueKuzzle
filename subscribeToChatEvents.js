const connectToKuzzle = require('./kuzzleConnection');

async function subscribeToChatMessages() {
    const kuzzle = await connectToKuzzle();

    try {
        await kuzzle.realtime.subscribe('chat', 'chat-messages', {}, (notification) => {
            console.log('Notification reçue :', notification);
        });

        console.log('Souscription aux événements de la collection chat-messages réussie.');
    } catch (error) {
        console.error('Erreur lors de la souscription aux événements de la collection :', error.message);
    }
}

subscribeToChatMessages().catch(console.error);