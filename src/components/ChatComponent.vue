<template>
  <div class="chat-container">
    <h2 class="chat-title">Chat made with Kuzzle</h2>
    <ul class="chat-messages">
      <li v-for="msg in messages" :key="msg.id" class="message-item">
        <strong>{{ msg.author }}:</strong> {{ msg.message }}
      </li>
    </ul>
  </div>
</template>


<script>
// Assurez-vous que le chemin d'accès est correct pour vos imports
import { Kuzzle, WebSocket } from 'kuzzle-sdk';

export default {
  data() {
    return {
      messages: [],
    };
  },
  async mounted() {
    const kuzzle = new Kuzzle(new WebSocket('localhost'));

    try {
      await kuzzle.connect();
      console.log('Connected to Kuzzle Server.');

      await kuzzle.realtime.subscribe('chat', 'chat-messages', {}, (notification) => {
        if (notification.type === 'document' && notification.action === 'create') {
          const data = notification.result._source;

          if (!data.author || data.author.trim().length === 0 || data.message.length > 255) {
            // Gérer l'erreur si nécessaire
            return;
          }

          // Ajout du message reçu à la liste des messages pour l'affichage
          this.messages.push({
            // Vous pouvez choisir d'utiliser `Date.now()` ou un autre identifiant unique pour `id`
            id: Date.now(),
            author: data.author,
            message: data.message
          });
        }
      });

      console.log('Subscribed to chat-messages successfully.');
    } catch (error) {
      console.error('Error while connecting or subscribing:', error.message);
    }
  },
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f4f8; /* Gris très clair */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chat-title {
  margin-bottom: 20px;
  color: #2a6496;
  text-align: center;
}

.chat-messages {
  list-style-type: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
  background-color: #e9eff3;
  border-radius: 4px;
}

.message-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #bce0fd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.message-item strong {
  color: #3079b4;
}
</style>

