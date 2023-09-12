module.exports = ({ userRepository }) => {
    const all = () => {
        return Promise
        .resolve()
        .then(() =>
            userRepository.getAll({
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
                ]
            })
        )
        .catch(error => {
            throw new Error(error)
        })
    }

    return { all }
}