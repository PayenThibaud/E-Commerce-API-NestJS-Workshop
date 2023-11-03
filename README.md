# Créer une nouvelle route "direBonjour"

Pour créer une nouvelle route, il suffit simplement de créer une nouvelle méthode dans un controller, ici :

```ts
direBonjour() {}
```

Et de l'annoter avec le décorateur :

```ts
@Get()
```

Fournit par Nest.

L'argument `'direBonjour'` dans le décorateur `@Get()` permet de dire à Nest de mapper votre nouvelle route en tant que `mon-api.com/direBonjour`. En faisant ça les utilisateurs de l'API peuvent utiliser votre route `direBonjour` en ajoutant `/direBonjour`