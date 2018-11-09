FROM node:8.12.0

# Dockerfileで RUN、CMD、ENTRYPOINT COPY、 ADD
# 命令実行時の作業ディレクトリ（working directory）を指定
WORKDIR /app

COPY ./node/webpack.config.js /app/webpack.config.js
COPY ./node/package.json /app/package.json

RUN npm install --no-progress
RUN npm install webpack --save-dev

CMD ["npm", "run", "watch:dev"]
