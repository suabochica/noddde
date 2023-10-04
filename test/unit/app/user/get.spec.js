
const { expect } = require('chai')
const getUseCase = require('src/app/user/post')

describe('App -> Use -> Get', () => {
  let useCase
  const mockData = [{
    firstName: 'Test',
    lastName: 'Developer'
  }]

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        getAll: () => mock
      }

      useCase = getUseCase({
        userRepository: MockRepository
      })
    })

    it('should display all the user records on success', async () => {
      const users = await useCase.all()

      expect(users).to.equal(mockData)
    })
  })

  describe('Fail path', () => {
    beforeEach(() => {
      const MockRepository = {
        getAll: () => Promise.reject('Error')
      }

      useCase = getUseCase({
        userRepository: MockRepository
      })
    })

    it('should display an error on rejection', async () => {
      let error

      try {
        await useCase.all()
      } catch (err) {
        error = err.message
      }

      expect(error).to.equal('Error')
    })
  })
})
