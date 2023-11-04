# Migrer le schéma `Prisma` vers la base de données

## Fichiers concernés

- `prisma/migrations/?/migration.sql` ([voir le fichier](./e-commerce/prisma/migrations/20231104041452_/migration.sql))
- `prisma/migrations/migration_lock.toml` ([voir le fichier](./e-commerce/prisma/migrations/migration_lock.toml))

## Solution

Pour créer importer une structure de schéma dans une base de données, il faut :

- Configurer le chemin d'accès de Postgres dans le fichier `.env`
- Exécuter la commande :
```sh
npx prisma migrate dev
```

À la racine du projet Nest.