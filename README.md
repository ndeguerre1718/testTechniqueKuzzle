# Test Technique Kuzzle

## Retour sur l'Expérience avec Kuzzle

### Processus d'Installation de Kuzzle

Le processus de configuration et d'installation de Kuzzle a été simple et bien documenté. La documentation officielle de [Kuzzle](https://docs.kuzzle.io) a fourni des instructions claires et précises, ce qui a rendu la configuration initiale fluide et sans accroc.

### Apprentissage Accéléré avec l'Assistance de l'IA

Pour améliorer et accélérer la courbe d'apprentissage associée à Kuzzle et sa pile technologique, j'ai utilisé des outils d'IA. Ces technologies avancées ont constitué une ressource essentielle, réduisant considérablement le temps normalement requis pour se familiariser avec de nouvelles technologies. Leur capacité à fournir des informations instantanées et des exemples de code à la demande a rendu le processus d'apprentissage plus efficace et beaucoup moins intimidant.

### Retours et Perspectives

Voici quelques perspectives basées sur mon expérience :

- **Clarté de la Documentation** : La clarté de la documentation de Kuzzle a joué un rôle crucial pour atténuer les défis potentiels lors de l'installation et des premiers pas avec le produit.

- **Apprentissage Poussé par l'IA** : Utiliser l'IA a non seulement permis de gagner du temps mais a également offert un avantage d'apprentissage unique, me donnant un accès rapide à une vaste connaissance et à des conseils pratiques.

- **Intégration des Développeurs** : Pour les développeurs qui abordent Kuzzle, je recommande de tirer pleinement parti de la documentation disponible et d'envisager l'utilisation d'outils d'IA pour aider à comprendre en profondeur les opérations de Kuzzle.

En résumé, l'expérience globale du développeur avec Kuzzle a été positive, avec une documentation complète et l'avantage supplémentaire du support de l'IA qui se sont avérés être des atouts inestimables tout au long du parcours de développement.





# Démarrage du Projet

Ce guide vous aidera à lancer l'application Vue.js localement sur votre machine.

## Prérequis

Avant de commencer, assurez-vous que vous avez [Node.js](https://nodejs.org/) installé sur votre machine. Ce projet nécessite Node.js pour exécuter le serveur de développement et gérer les dépendances.

## Installation des Dépendances

Pour installer les dépendances requises par le projet, suivez ces étapes :

1. Ouvrez un terminal.
2. Naviguez jusqu'au répertoire racine de votre projet en utilisant la commande `cd chemin/vers/votre/projet`.
3. Exécutez la commande suivante :

```bash
npm install
```

Cette commande installe toutes les dépendances listées dans le fichier `package.json` du projet.

## Lancement de l'Application

Une fois les dépendances installées, vous pouvez lancer l'application en mode développement :

1. Dans le terminal, assurez-vous d'être toujours dans le répertoire racine du projet.
2. Exécutez la commande suivante :

   ```bash
   npm run serve
   ```


## Structure des Branches du Projet

Dans mon projet, j'ai organisé le développement en utilisant une structure de branches spécifique pour faciliter la gestion des fonctionnalités et des corrections. Voici les branches que vous trouverez dans le dépôt :

### `feature/setup-kuzzle-sdk`
Cette branche contient la configuration initiale du SDK Kuzzle JavaScript, essentielle pour démarrer le développement avec Kuzzle.

### `feature/connect-kuzzle`
Dans cette branche, vous trouverez l'implémentation de la connexion à l'instance Kuzzle. Elle est cruciale pour assurer la communication entre le client et le serveur Kuzzle.

### `feature/create-chat-collection`
Cette branche est dédiée à la création de la collection `chat-messages`. Elle sert à stocker les messages échangés dans l'application de chat.

### `feature/subscribe-chat-events`
Ici, j'ai mis en place une souscription aux événements de la collection `chat-messages`. Cette fonctionnalité permet de recevoir des notifications en temps réel pour tout nouvel événement dans la collection.

### `feature/realtime-chat-controller`
Cette branche inclut la mise en place du contrôleur de chat en temps réel utilisant Kuzzle. Elle est essentielle pour gérer les interactions de chat en temps réel.

### `feature/chat-frontend`
Le développement de l'interface utilisateur pour le chat se trouve dans cette branche. J'ai opté pour Vue.js pour une interface riche et réactive, mais une interface en ligne de commande est également envisageable pour une simplicité maximale.

### `feature/detect-bad-words`
Enfin, cette branche ajoute une fonctionnalité importante pour détecter les mots inappropriés dans les messages et émettre des avertissements. Elle contribue à maintenir un environnement de chat respectueux et sécurisé.

Chacune de ces branches a été créée pour isoler le développement d'une fonctionnalité spécifique, offrant ainsi une organisation claire et facilitant les revues de code. Avant de fusionner ces fonctionnalités dans la branche principale `master`, elles sont d'abord intégrées dans la branche `develop`. Cela permet de réaliser des tests d'intégration complets et d'assurer la stabilité du code. Une fois les fonctionnalités validées au sein de `develop` et que tous les tests sont passés avec succès, elles peuvent alors être fusionnées dans `master` pour un déploiement.

# Tester l'API de Chat avec Postman

Pour s'assurer que l'API de chat fonctionne correctement, vous pouvez envoyer des requêtes de test à l'aide de l'outil Postman. Postman est une application populaire pour tester les APIs, qui permet d'envoyer des requêtes HTTP et de voir les réponses.

## Étapes pour Tester avec Postman

1. **Ouvrir Postman**: Lancez l'application Postman sur votre ordinateur.

2. **Créer une Nouvelle Requête**: Cliquez sur le bouton `+ New` ou `+` pour créer un nouvel onglet de requête.

3. **Configurer la Requête**:
   - **Méthode**: Sélectionnez la méthode HTTP `POST` dans le menu déroulant.
   - **URL**: Saisissez l'URL de l'API de votre chat pour créer des messages. Par exemple: `http://localhost:7512/chat/chat-messages/_create`.

4. **Définir le Corps de la Requête**:
   - Cliquez sur l'onglet `Body`.
   - Sélectionnez l'option `raw` et choisissez `JSON` comme format.
   - Saisissez les détails du message sous forme de JSON. Par exemple :

     ```json
     {
       "author": "John Doe",
       "message": "Hello, World!"
     }
     ```

5. **Envoyer la Requête**: Cliquez sur le bouton `Send` pour envoyer votre requête à l'API.

6. **Vérifier la Réponse**: Examinez la réponse reçue pour vous assurer que le message a été créé avec succès. Vous devriez recevoir un statut de réponse `200 OK` et les détails du message dans le corps de la réponse.

## Capture d'écran de Postman

Voici un exemple de configuration de requête dans Postman pour envoyer un message :

![image](https://github.com/ndeguerre1718/testTechniqueKuzzle/assets/115724427/606543ea-c722-4d80-b6d5-fb8437c62898)


## Problèmes Communs

- **Erreur de Connexion**: Si vous ne pouvez pas vous connecter, assurez-vous que le serveur Kuzzle est en cours d'exécution et accessible.
- **Erreur dans les Données Envoyées**: Si vous obtenez une erreur liée aux données, vérifiez que le JSON est bien formaté et que toutes les propriétés requises sont présentes.
