const connectToKuzzle = require('./kuzzleConnection');

async function createChatCollection() {
    const kuzzle = await connectToKuzzle();

    try {
        const indexName = 'chat';
        const collectionName = 'chat-messages';

        if (!(await kuzzle.index.exists(indexName))) {
            await kuzzle.index.create(indexName);
            console.log(`Index ${indexName} created`);
        }

        if (!(await kuzzle.collection.exists(indexName, collectionName))) {
            await kuzzle.collection.create(indexName, collectionName);
            console.log(`Collection ${collectionName} created in index ${indexName}`);
        } else {
            console.log(`Collection ${collectionName} already exists in index ${indexName}`);
        }
    } catch (error) {
        console.error(`Failed to create chat-messages collection: ${error.message}`);
    } finally {
        try {
            kuzzle.disconnect();
            console.log('Successfully disconnected');
        } catch (error) {
            console.error(`Failed to disconnect: ${error}`);
        }
    }
}

createChatCollection().catch(console.error);
