FROM python:3.8
RUN mkdir /django_rest
WORKDIR /django_rest
ADD . /django_rest
RUN pip install -r requirements.txt
EXPOSE 8000
CMD python3 manage.py runserver 0:8000