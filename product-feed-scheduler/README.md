## Prerequisites

- Install [Node.js v16](https://nodejs.org/en/)
- Download and run [Kafka](https://kafka.apache.org/downloads)
- Add `config/local-development.json` and update the config values accordingly
```
{
  "host": <HOST>,
  "port": <PORT>,
  "cron": {
    "timeZone": <CRON_TIMEZONE>,
    "expressions": {
      "notifications": <CRON_NOTIFICATIONS_EXPRESSION>
    }
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
