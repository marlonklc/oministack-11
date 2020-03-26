# oministack-11

## knex 
#### initial command to generate knexfile
`npx knex init`
### ----- MIGRATIONS
Migrations are a way to make database changes or updates, like creating or dropping tables. Its like liquibase or flyway on Java
#### create an migration (to specific table)
`npx knex migrate:make <migrationname>`
#### execute all migrations
`npx knex migrate:latest`
### -----------------
