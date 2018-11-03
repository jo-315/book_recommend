### setup
docker build -t hogehoge1.0 .

### start docker
docker run --name nginx -d -p 8080:80 hogehoge:1.0

### コンテナに入る
docker exec -it コンテナID bin/sh
