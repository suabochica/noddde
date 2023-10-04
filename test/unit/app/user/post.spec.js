const { expect } = require('chai')
const postUseCase = require('src/app/user/post')

describe('App -> User -> Post', () => {
  let useCase

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        create: (data) => data
      }

      useCase = postUseCase({
        userRepository: MockRepository
      })
    })

    it('should create the records', async () => {
      const body = {
        firstName: 'test',
        lastName: 'dev',
        middleName: 'test',
        email: 'test@gmail.com',
        roleId: 1,
        isDeleted: 0,
        createdBy: '123'
      }
      const list = await useCase.create({ body })

      expect(list.firstName).to.equal(body.firstName)
      expect(list.lastName).to.equal(body.lastName)
    })
  })

  describe('Fail path', () => {
    beforeEach(() => {
      const MockRepository = {
        create: () => Promise.reject('Error')
      }

      useCase = postUseCase({
        userRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      const body = {
          firstName: 'test',
          lastName: 'dev',
          middleName: 'test',
          email: 'test@gmail.com',
          roleId: 1,
          isDeleted: 0,
          createdBy: '123'
      }

      try {
        await useCase.create({ body })
      } catch (err) {
        error = err.message
      }

      expect(error).to.equal('Error')
    })
  })
})
