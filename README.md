# Exemple de Clean Archi simple (with Redux)

## Installation

Application non lancable. Ceci est un exemple pour montrer la structuration du code.

3 Séparations: domain, infrastructure, et interface.

## L'organisation

```
src
├── Domain
│   ├── Entities (Entités TypeScript)
│   └── Usecases (Reducers Redux et fonctions métier)
├── Infrastructure
│   └── Gateways (connexion aux API's, fetchs)
├── Store
└── UserInterface
    ├── Composants
    └── Pages
```
