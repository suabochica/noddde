Dependency Injection
====================

Dependency injection is a way to implement inversion of control pattern. The core idea of this pattern is that every dependency of an object that _can_ be decouple from that should be injected to make it more flexible, making the call-site have control over the dependencies of the called method, thus _inversion of contro_.

In this boilerplate we make extensive use of dependency injection in the `app`, `interface` and `infra` layers, for example:

- Injecting the ORM classes in the repositories at the `infra` layer;
- Injecting the repositories in the operations at the `app` layer;
- Injecting the operations in the controller at the `interfaces` layer;

we implement dependency injection using the [Awilix](https://www.npmjs.com/package/awilix) library, that is flexible and easy to use. For the injections on the controller we use [awilix-express](https://www.npmjs.com/package/awilix-express).

The base of our dependency injection is a design pattern called _composition root_, and in the boilerplate it sits on the root of the `src` folder in the `src/container.js`. That is where we will define what each of our injected dependencies will return, you should edit this file according to the growth of your application, like adding new operations and repositories to be injected.

