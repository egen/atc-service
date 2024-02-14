## Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/)

## Installation

```bash
$ docker compose build
```

## Running the app

```bash
$ docker compose up
```

## Applications running

- `PostgresDB`: `localhost:5432`
- `PGAdmin`: `http://localhost:5050`
  - `email`: `admin@admin.com`
  - `password`: `root`
- `product-api`: `http://localhost:8080/swagger`
  - `Authorize token`: `ABCD`
- `zookeper`: `localhost:2181`
- `kafka`: `localhost:9093`
- `product-enricher`
  - `product-kafka-topic`: `product.v1.production`
  - `kafkaClientId`: `product`
  - `kafkaGroupId`: `product-enricher`
- `product-feed-scheduler`
  - `host`: `0.0.0.0`
  - `port`: `8081`

## Killing all applications
```bash
$ docker compose down
```
