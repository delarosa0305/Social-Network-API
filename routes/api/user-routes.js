const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('../../controlers/user-controller');

// get /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser)

// get /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

module.exports = router