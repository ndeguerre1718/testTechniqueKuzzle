# testTechniqueKuzzle
Structure des Branches du Projet
Dans mon projet, j'ai organisé le développement en utilisant une structure de branches spécifique pour faciliter la gestion des fonctionnalités et des corrections. Voici les branches que vous trouverez déjà présentes dans le dépôt :

feature/setup-kuzzle-sdk : Cette branche contient la configuration initiale du SDK Kuzzle JavaScript, essentielle pour démarrer le développement avec Kuzzle.

feature/connect-kuzzle : Dans cette branche, vous trouverez l'implémentation de la connexion à l'instance Kuzzle. Elle est cruciale pour assurer la communication entre le client et le serveur Kuzzle.

feature/create-chat-collection : Cette branche est dédiée à la création de la collection chat-messages. Elle sert à stocker les messages échangés dans l'application de chat.

feature/subscribe-chat-events : Ici, j'ai mis en place une souscription aux événements de la collection chat-messages. Cette fonctionnalité permet de recevoir des notifications en temps réel pour tout nouvel événement dans la collection.

feature/realtime-chat-controller : Cette branche inclut la mise en place du contrôleur de chat en temps réel utilisant Kuzzle. Elle est essentielle pour gérer les interactions de chat en temps réel.

feature/chat-frontend : Le développement de l'interface utilisateur pour le chat se trouve dans cette branche. J'ai opté pour Vue.js pour une interface riche et réactive, mais une interface en ligne de commande est également envisageable pour une simplicité maximale.

feature/detect-bad-words : Enfin, cette branche ajoute une fonctionnalité importante pour détecter les mots inappropriés dans les messages et émettre des avertissements. Elle contribue à maintenir un environnement de chat respectueux et sécurisé.
