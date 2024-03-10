const connectToKuzzle = require('../kuzzleConnection');
async function subscribeToChatMessages() {
    const kuzzle = await connectToKuzzle();

    try {
        await kuzzle.realtime.subscribe('chat', 'chat-messages', {}, (notification) => {
            if (notification.type === 'document' && notification.action === 'create') {
                const data = notification.result._source;
                if (!data.author || data.author.trim().length === 0) {
                    console.error('A message must have an author.');
                    return;
                }

                if (data.message.length > 255) {
                    console.error('Message too long. It must be under 255 characters.');
                    return;
                }
                console.log(`New message from ${data.author} : ${data.message}`);
            }
        });

        console.log('Souscription aux événements de la collection chat-messages réussie.');
    } catch (error) {
        console.error('Erreur lors de la souscription aux événements de la collection :', error.message);
    }
}

subscribeToChatMessages().catch(console.error);