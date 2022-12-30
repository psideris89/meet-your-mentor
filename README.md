# 🚀 Meet-your-mentor
Full stack application with `Spring Boot 3` and `Remix Run`.

# Running
To run the application locally use `docker compose` to spin up a `Postgres` database
```shell
$ docker-compose up
```

then start the back-end api.
```shell
$ ./gradlew bootRun
```

then start the app.
```shell
$ cd ./webapp && npm run dev
```

# Technical details
## Database
We use Postgres database (image `postgres:15.1-alpine`)

## Backend-api
The back-end api is built on `Spring boot 3`

## Frontend-app
The web app is built on `Remix Run`
