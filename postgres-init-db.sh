#!/bin/sh -e

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<- EOSQL
    CREATE DATABASE "noddde";
EOSQL

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<- EOSQL
    CREATE DATABASE "noddde_test";
EOSQL

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=noddde <<- EOSQL
    CREATE EXTENSION "uuid-ossp";
    CREATE EXTENSION "hstore";
EOSQL

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=noddde_test <<- EOSQL
    CREATE EXTENSION "uuid-ossp";
    CREATE EXTENSION "hstore";
EOSQL
