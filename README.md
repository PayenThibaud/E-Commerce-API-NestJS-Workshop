# Créer une ressource (module) nommée `Users`

## Fichiers concernés

- `package.json` ([voir le fichier](./e-commerce/package.json))
- `src/users/dto/create-user.dto.ts` ([voir le fichier](./e-commerce/src/users/dto/create-user.dto.ts))
- `src/users/dto/update-user.dto.ts` ([voir le fichier](./e-commerce/src/users/dto/update-user.dto.ts))
- `src/users/users.controller.dto` ([voir le fichier](./e-commerce/src/users/users.controller.ts))
- `src/users/users.service.dto` ([voir le fichier](./e-commerce/src/users/users.service.ts))
- `src/users/users.module` ([voir le fichier](./e-commerce/src/users/users.module.ts))
- `src/app.module` ([voir le fichier](./e-commerce/src/app.module.ts))

## Solution

Pour créer un nouveau module complet (ressource) avec Nest CLI, il suffit d'exécuter la commande :

```sh
nest generate ressource users
```

ou

```sh
nest g res users
```

À la racine du projet Nest.