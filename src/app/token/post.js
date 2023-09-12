const Token = require('src/domain/token')

/**
 * This file will hold all the get use-case for user domain
 */

module.exports = ({ userRepository, webToken }) => {
    const validate = ({ body }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const credentials = Token(body);
                const userCredentials = await userRepository.findOne({
                    attributes: [
                        'id',
                        'firstName',
                        'lastName',
                        'middleName',
                        'email',
                        'password',
                        'roleId',
                        'isDeleted',
                        'createdBy'
                    ],
                    where: {
                        email: credentials.email,
                        isDeleted: 0
                    }
                })

                const validatePass = userRepository.validatePassword(userCredentials.password)

                if (!validatePass(credentials.password)) {
                    throw new Error('Invalid Credentials')
                }

                const singIn = webToken.singin()

                resolve({
                    token: singIn({
                        id: userCredentials.id,
                        firstName: userCredentials.firstName,
                        lastName: userCredentials.lastName,
                        middleName: userCredentials.middleName,
                        email: userCredentials.email
                    })
                })

            } catch (error) {
                reject(error)
            }
        })
    }

    return { validate }
}
