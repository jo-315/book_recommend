FROM python:3.5.2-alpine

WORKDIR /app

COPY ./python/requirements.txt /app/requirements.txt

# requirements.txtに記載されたパッケージをインストール
RUN pip install -r requirements.txt

CMD ["python", "./api/sample.py"]
