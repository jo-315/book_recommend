# setup
### docker file　から作成
`docker build -t hogehoge1.0 .`

### docker componesed から作成
docker containerをbuildする
`docker-compose build (--no-cache)`

# 運用
### start docker container
`docker run --name nginx -d -p 8080:80 hogehoge:1.0`

### start docker-compose
`docker-compose up`

### restart docker
`docker start コンテナID`

### コンテナの確認
`docker ps -a`

### コンテナに入る
`docker exec -it コンテナID bin/sh`
