## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

### postgresql docker command
`docker run --name postgres-cwt -e POSTGRES_PASSWORD=<<password>> -p:5432:5432 -d postgres:alpine`

### pgAdmin4 docker command 
`docker run -p 80:80 -e "PGADMIN_DEFAULT_EMAIL=<<mail>>" -e "PGADMIN_DEFAULT_PASSWORD=<<password>>" --link postgres-cwt:postgres -d dpage/pgadmin4`

- uuuid-ossp extension über pgAdmin (localhost:80) installieren
- server mit yarn start:dev starten
