FROM python:latest

ENV PYTHONUNBUFFERED 1

COPY requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

WORKDIR /app

COPY . .