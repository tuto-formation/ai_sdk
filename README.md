# 🎓 Formation UDEMY AI SDK

Bienvenue dans cette formation complète sur AI SDK, la bibliothèque TypeScript moderne pour créer des outils interactifs sur des modèles LLM.

## À propos

Ce répertoire gituh contient l'ensemble du matériel pédagogique de la formation UDEMY AI SDK : exercices, exemples et ressources pour apprendre à développer avec le tooltip développé par Vercel. Chaque module vous permet de progresser à votre rythme en pratiquant sur des cas concrets.

**Objectif :** Vous rendre autonome dans la création d'applications IA robustes et scalables.

## 📚 Programme détaillé

### Fondamentaux
Découvrez comment fonctionne l'IA, son architecture et ses concepts principaux.

### Streaming & Réactivité
Implémentez des réponses en temps réel avec du streaming. Créez des interfaces utilisateur fluides qui affichent progressivement les résultats de vos modèles.

### Multi-providers
Configurez et basculez entre différents fournisseurs (OpenAI, Anthropic, Google) sans réécrire votre code. Gérez les spécificités de chaque provider.

### Tool Calling
Donnez des capacités étendues à vos agents IA en les connectant à des APIs externes, bases de données ou services tiers via le function calling.

### Gestion avancée
Orchestrez la mémoire conversationnelle, gérez le contexte sur de longues sessions et optimisez les performances de vos agents.

### Data & Structures
Travaillez avec des formats complexes : message parts, payload custom, métadonnées et structuration des échanges.

### Multimédia
Intégrez le traitement d'images, fichiers et autres assets dans vos workflows IA.

### Production
Déployez vos applications avec monitoring, tests automatisés, observabilité et gestion d'erreurs professionnelle.


## ✅ Prérequis techniques

Avant de démarrer, assurez-vous d'avoir :

- **Node.js** v22 minimum ([télécharger](https://nodejs.org/en/download))
- **TypeScript** v5+ ([télécharger](https://www.typescriptlang.org/))
- **Package manager** : npm, pnpm, yarn ou bun
- **Clé API** via [OpenRouter](https://openrouter.ai/) pour accéder aux LLMs (Claude, GPT, Gemini, Mistral...)

## 🚀 Démarrage

### Configuration initiale

Récupérez le projet :

```bash
git clone https://github.com/anonymze/tuto_ai_sdk.git
cd tuto_ai_sdk
npm install
```

Configurez vos variables d'environnement :

```bash
cp .env .env.local
# Éditez .env.local et ajoutez votre clé API OpenRouter
```

Lancez le mode développement :

```bash
npm dev
```
