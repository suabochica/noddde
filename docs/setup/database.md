Database setup
==============

By default we use Sequilez with PostgreSQL you can change it by installing the adapter for your DBMS and then changin the setting for your environment in `config/database.js`.

You can use different dialects for each environment, it is common pattern to use SQLite on test environment and PostgreSQL for development and production.
