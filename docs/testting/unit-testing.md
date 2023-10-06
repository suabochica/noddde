Unit Testing
============

We write unit test to see if a give module works. All the dependencies are stubbed, meaning we are providing fake dependencies for a module.

You should write the test for the exposed methods, not for the internal workings of the given module.

The anatomy of a unit test
--------------------------

Each unit test has the following structure:

1. test setup
2. calling the tested method
3. asserting

Each unit test should related to one concern only. Of course does not mean that you can add one assertion only, but I encourage the use of a just good one assertion.

Modules used for node.js unit testing
-------------------------------------

For unit testing, we use the following modules:

- test runner, `mocha`
- assertion library, `chai`
- test spies, stubs and mocks, `sinon`
