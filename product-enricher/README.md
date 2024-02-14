## Prerequisites

- Install [Node.js v16](https://nodejs.org/en/)
- Download and run [Kafka](https://kafka.apache.org/downloads)
- Add `config/local-development.json` and update the config values accordingly
```
"kafka": {
  "brokers": <KAFKA_BROKERS>,
  "clientId": <KAFKA_CLIENT_ID>,
  "groupId": <KAFKA_GROUP_ID>,
  "topics": {
    "health": <KAFKA_HEALTH_TOPIC>,
    "product": <KAFKA_PRODUCT_TOPIC>
  }
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

## Test

```bash
# linting and unit tests
$ npm test
```
