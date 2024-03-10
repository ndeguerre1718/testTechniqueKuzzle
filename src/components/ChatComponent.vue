<template>
  <div class="chat-container">
    <h2 class="chat-title">Chat made with Kuzzle</h2>
    <ul class="chat-messages">
      <li v-for="msg in messages" :key="msg.id" class="message-item">
        <strong>{{ msg.author }}:</strong> {{ msg.message }}
      </li>
    </ul>
    <p v-if="warningMessage" class="warning-message">{{ warningMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>


<script>
import { Kuzzle, WebSocket } from 'kuzzle-sdk';

export default {
  data() {
    return {
      messages: [],
      errorMessage: '',
      warningMessage: '',
    };
  },
  methods: {
    detectBadWords(message) {
      const badWordsList = ['shower', 'trash', 'stinky'];
      const regex = new RegExp(badWordsList.join('|'), 'i');
      return regex.test(message);
    }
  },
  async mounted() {
    const kuzzle = new Kuzzle(new WebSocket('localhost'));

    try {
      await kuzzle.connect();
      console.log('Connected to Kuzzle Server.');

      await kuzzle.realtime.subscribe('chat', 'chat-messages', {}, (notification) => {
        if (notification.type === 'document' && notification.action === 'create') {
          const data = notification.result._source;

          this.errorMessage = '';
          this.warningMessage = '';

          if (!data.author || data.author.trim().length === 0) {
            this.errorMessage = 'A message must have an author.';
            return;
          }

          if (data.message.length > 255) {
            this.errorMessage = 'The message is too long. It must be under 255 characters.';
            return;
          }

          if (this.detectBadWords(data.message)) {
            this.warningMessage = `Warning: Inappropriate language detected from ${data.author}.`;
          }
          this.messages.push({
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

.error-message {
  color: #ff3860; /* rouge-rose pour les erreurs */
  font-weight: bold;
}

.warning-message {
  color: #fa6d47; /* Choisir une couleur visible pour les avertissements */
  /* ... autres styles pour warning-message ... */
}
</style>

