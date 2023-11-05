# Créer une ressource (module) nommée `Users`

## Fichiers concernés

- `package.json` ([voir le fichier](./e-commerce/package.json)) ([voir la modification](https://github.com/benjGam/E-Commerce-API-NW/commit/3d758c460df87bcf1439c3aee8702518f37c7685#diff-38b8baea43f15fba48452ff23356b674c36c4faaa50df5a0127764f72d303cf0))
- `src/users/dto/create-user.dto.ts` ([voir le fichier](./e-commerce/src/users/dto/create-user.dto.ts))
- `src/users/dto/update-user.dto.ts` ([voir le fichier](./e-commerce/src/users/dto/update-user.dto.ts))
- `src/users/users.controller.dto` ([voir le fichier](./e-commerce/src/users/users.controller.ts))
- `src/users/users.service.dto` ([voir le fichier](./e-commerce/src/users/users.service.ts))
- `src/users/users.module` ([voir le fichier](./e-commerce/src/users/users.module.ts))
- `src/app.module` ([voir le fichier](./e-commerce/src/app.module.ts)) ([voir la modification](https://github.com/benjGam/E-Commerce-API-NW/commit/3d758c460df87bcf1439c3aee8702518f37c7685#diff-928b9a30ea12a67f6316c248841d5ce7bc59ac6b795bcb2d7eb854978f36d081))

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

Et de sélectionner `REST API` puis d'entrer `Y`.
