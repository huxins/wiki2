# PostgreSQL Install

## Docker

```sh
$ docker run -d -p 5432:5432 --name postgres \
  --restart always \
  -e POSTGRES_PASSWORD=password \
  -e TZ=Asia/Shanghai \
  -v /var/postgres/data:/var/lib/postgresql/data \
  postgres:10.7-alpine
```

