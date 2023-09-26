Clean Architecture Node
=======================

> RESTful API with Domain Driven Design

TODO
----

- [x] Add domain folder to represent domain layer
- [x] Add app folder to represent app layer
- [x] Add infra folder to represent infrastructure
- [x] Add config folder to represent database and env configurations.
- [x] Add interfaces folder to represent the entry points of our app

Quick Start
-----------

1. Install the dependencies with yarn
2. Install global dependencies (check the application setup section)
3. Create the development database (check the database setup section).
4. Run the database migrations and seed with `yarn db:refresh`
5. Run the application in development mode with `yarn start`.
6. Access to `http://localhost:4000/api/v1`

Application Setup
-----------------

```sh
npm install -g standard
```

JavaScript standard style.

```sh
npm install -g babel-eslint
```

Required byt standard JS.

```sh
npm install -g snazzy
```

Format JavaScript standard style as beautiful output.

```sh
npm install -g sequelize-cli
```

Command Line Interface (CLI) for sequelize.

Database Setup
-----------------

1. Install postgreSQL v9/6
2. Create an empty database named `node_ddd`
3. Rename the .env and populate it with the correct credentials and setting of postgreSQL database
4. Enable SSL in the postgresql.conf file

To connect to postgreSQL use:

```sh
psql
```

To create the database, run:

```sh
CREATE DATABASE node_ddd;
```

Overview
--------

- uses Node.js > v9
- written using ES6
- uses JavaScript Standard Style
- use Sequelize and his cli as ORM and data migration tool (you can change easily to different ORM and migration tool)
- file name convention:
  - ⛔️ `camelCase`
  - ⛔️ `snake_case`
  - ✅ `kebab-case`

CLI Tools
---------

- `yarn start` - start the noddde API boilerplate for production.
- `yarn start:dev` - start the noddde API boilerplate locally/development.
-`yarn start:codecrumbs` - start codecrumbs will give you quick overview the structure of the project.
-`yarn test` - run unit tests.
-`yarn db:reset` - run all migrations and seeds.
-`yarn db:refresh` - run all migrations.
-`yarn db:migrate` - apply database changes using migration script.
-`yarn lint` - lint codebase using JavaScript Standard Style.
-`yarn lint:fix` - fix code according JavaScript Standard Style.

