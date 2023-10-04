Clean Architecture Node
=======================

> RESTful API with Domain Driven Design

TODO
----

- [x] Add token domain folder to represent domain layer
- [x] Add token app folder to represent app layer
- [x] Add token infra folder to represent infrastructure
- [x] Add jwt interfaces folder to represent the entry points of our app
- [x] Add user domain folder to represent domain layer
- [x] Add user app folder to represent app layer
- [x] Add user infra folder to represent infrastructure
- [x] Add user interfaces folder to represent the entry points of our app
- [x] Add config folder to represent database and env configurations.

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
- `yarn start:codecrumbs` - start codecrumbs will give you quick overview the structure of the project.
- `yarn test` - run unit tests.
- `yarn db:reset` - run all migrations and seeds.
- `yarn db:refresh` - run all migrations.
- `yarn db:migrate` - apply database changes using migration script.
- `yarn lint` - lint codebase using JavaScript Standard Style.
- `yarn lint:fix` - fix code according JavaScript Standard Style.


Using sequelize
---------------

Sequelize is used to define mappings between models and database tables. It will automatically add the attributes `created_at` and `updated_at` to the tables created. However for consistency for our naming we changes this to `createAt` and `updatedAt`. This will cause issue when using model so we have to add this on config:

```js
module.exports = function (sequelize, DataTypes) {
  const User = . sequelize.define('users', {
    ...
  }, {
    timestamps: false // Add this
  })
}
```

Below the basic command of sequelize-cli:

```txt
$ sequelize  db:migrate             Run pending migrations.
$ sequelize  db:migrate:old_schema  Update legacy migration table
$ sequelize  db:migrate:undo        Revert the last migration run.
$ sequelize  db:migrate:undo:all    Revert all migrations ran.
$ sequelize  db:seed                Run seeders.
$ sequelize  db:seed:undo           Deletes data from the database.
$ sequelize  db:seed:undo:all       Deletes data from the database.
$ sequelize model:create --name modelname --attributes "text:text, url:string"  # create model
$ sequelize seed:create     # create seeder
```
> if you did not install your sequelize-cli globally you can run this commands by `npx`

For mor information, check the [sequelize-cli documentation](https://github.com/sequelize/cli).
