const router = require('express').Router();
const {
    createThought,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    deleteReactionById } = require('../../controlers/thought-controller');

// /api/users/:userId
router.route('/:userId').post(createThought);

// /api/users/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .put(updateThoughtById)
    .put(createReaction)
    .delete(deleteThoughtById);

    // /api/users/:userId/:thoughtId/:reactionId
router.route('/:userId/:thoughtId/:reactionId').delete(deleteReactionById);

module.exports = router;