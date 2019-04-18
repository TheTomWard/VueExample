FROM python:3.6
WORKDIR /app
COPY django/requirements.txt ./
RUN pip install -r /app/requirements.txt
COPY django/ /app