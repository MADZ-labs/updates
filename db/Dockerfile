from mysql:5.7

ENV MYSQL_DATABASE updates_feature
ENV MYSQL_USER root
ENV MYSQL ALLOW_EMPTY_PASSWORD yes

ADD schema.sql /docker-entrypoint-initdb.d
