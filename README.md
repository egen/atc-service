## Prerequisites

- Install [Node.js v16](https://nodejs.org/en/)
- Download and run [Postgresql DB](https://www.postgresql.org/)
- Add `config/local-development.json` and update the config values accordingly
```
{
  "port": <PORT>,
  "orm": {
    "host": <DB_HOST>,
    "port": <DB_PORT>,
    "username": <DB_USER>,
    "password": <DB_PASSWORD>,
    "database": <DB_NAME>
  },
  "cors": <CORS_ORIGINS>
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run the app using [Docker Compose](/product-api/docker-compose.yml)

```bash
$ docker compose up
```


*Note:*
- *you do not need to run postgres in you local machine if you are running the app using Docker*
- *app will run on port 8080 by default and can be updated in the [docker-compose](/product-api/docker-compose.yml)*


## Test

```bash
# linting and unit tests
$ npm test

# e2e tests
$ npm run test:e2e
```
