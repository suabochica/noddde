Folder Structure
================

The boilerplate uses a folder structure and logical architecture focused on separation of concern based on domain driven design and clean architecture. Instead of the classical `controllers`/ `models`/ `services` folders, we now have layers inside the `src` folder. Each of the folder layers is scoped by a namespace regarding the concern it it about (like `user`, `errors`, `logging` and so on).

Application layer (`app` folder)
--------------------------------

The application layer is responsible to mediate between your input interfaces and your business domain. In this layer we will have the use cases of your application and your application services (like mail service that communicates with a mail chimp from the infrastructure layer).

Domain layer (`domain` folder)
------------------------------

Here you will define your business domain classes, functions and services that compose your domain model. All your business rules should be declared in this layer so the application can use it to compose your use cases.

Infrastructure layer (`infra` folder)
-------------------------------------

This is the lowest of the layers. Here you will have the communication with what is outside your application, like the database, mail services and frameworks.

Interfaces layer (`interfaces` folder)
--------------------------------------

This folder contains all the entry points for your app. From the beginning here is where your express controller will be.
