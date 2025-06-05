# Portfolio

Bienvenue sur mon portfolio !
Il contient une page d'accueil qui me présente rapidement, une page 'Projets', une page 'Expériences' et une page expliquant mon histoire.
Mes contacts sont disponibles, à tout moment de la navigation, dans le pied de page.

## Fonctionnalités modulables facilement

- Template pour créer un projet et l'afficher sur la page des projets.
- Template pour référencer des technologies et des outils.
- Template pour créer une expérience et l'afficher sur la page des expériences.

## Tecnologies utilisées

- Angular & Material : v19.2.8
- TailWindCSS : v4.1.8
- FontAwesome : v6.7.2

# Installation

Pour installer ce portfolio, vous devez d'abord avoir sur votre machine :

- [Node](https://nodejs.org/en/download) (version utilisée : v22.14.0)
- [Bun](https://bun.sh) (version utilisée : v1.2.15)
- [git](https://git-scm.com/) (optionnel, seulement utilisé pour le téléchargement et le développement)

1. Clonez ce dépôt avec la commande :

```sh
git clone https://github.com/ToxykAuBleu/Portfolio.git
```

2. Déplacez-vous dans le dossier fraîchement créé :

```sh
cd Portfolio
```

3. Installez les dépendances :

```sh
bun install
```

# Déploiement

Pour héberger le portfolio sur la machine, il suffit d'exécuter la commande suivante :

```sh
bun run deploy
```

Le portfolio va être build, puis un serveur Bun va être lancé. Par défaut, il est démarré à l'adresse `localhost:4200`, mais elle peut être changée en créant un fichier `.env` comme celui-ci :

```env
HOST=localhost
PORT=4200
```

# Développement

Après avoir installé l'application, vous pouvez exécuter la commande suivante :

```sh
bun run start
```
