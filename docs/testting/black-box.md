Black Box
=========

One of the best ways to test your REST APIs is to treat them as black boxes.

Black box testing is a method where the functionality of an application is examined without the knowledge of its internal structures. So non of the dependencies are mocked or stubbed, but the system is tested as a whole.

The module that we use to apply black box testing in node.js REST APIs is `supertest`.

A simple tes case which check if a user is returned using the test runner `mocha` can be implemented like this:

```js
const request = require('supertest')

describe('GET /user/:id', function() {
  it('return a user', function() {
    return request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(200, {
        id: '1',
        name: 'John Math'
      }, done)
  })
})
```

You may ask: _how does the data get populated into the database which serves te REST API_

In general, it is a good approach write your test in a way that they make as few assumptions about the state of the system as possible. Still, in some scenarios you can find yourself in a spot when you need to know what is the state of the system exactly, so you can make assertions an achieve higher test coverage.

So, based on you need, you can populate the database with test data in one of the following ways:

- run your back box test scenarios on a knows subset of production data.
- populate the database with crafted data before the test cases are run. (see commands)

Of course, black box testing does not mean that you do not have to don unit test, you still have to write unit test for your APIs.
