const { User, Thought } = require('../models');

const thoughtController = {
    getAllThought(req, res) {
        Thought
    },

    getThoughtById( { params }, res) {
    },

    createThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findByIdAndUpdate(
                { _id: params.userId},
                { $push: { thoughts: _id } },
                { new: true }
            )
        })
        .then(dbThoughtdata => {
            if (!dbThoughtdata) {
                res.status(404)
            }
        })
    },

    updateThoughtById({ params, body }, res) {
    },

    deleteThoughtById({ params }, res) {
    },

    createReaction({ body }, res) {
    },

    deleteReactionById({ params }, res) {
    }
}

module.exports = thoughtController