const { User, Thought } = require('../models');

module.exports = {
  // Get ALL the thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // GET a SINGLE thought using its ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thoughtText) => 
          !thoughtText
          ? res.status(404).json({ message: "No thought associated with that ID. Please try again." })
          : res.json(thoughtText)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // CREATE a new thought
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(dbThoughtData => {
        User.findOneAndUpdate( { _id: params.userId }, { $push: { thoughts: dbThoughtData._id }}, { new: true } )
            .then(dbUserData => {
              if(!dbUserData) {
                res.status(404).json({ message: "No user found with this ID. Please try again." });
                return;
              }
              res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
          })
      .catch(err => res.status(500).json(err));
  },

  // UPDATE an existing thought using ID
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate( { _id: params.thoughtId }, body, { new: true } )
    .then(dbThoughtData => {
      if(!dbThoughtData) {
        res.status(404).json({ message: "No thought associated with that ID. Please try again." });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(500).json(err));
  },
  
  // DELETE a thought using ID
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
    .then(dbThoughtData => {
      if(!dbThoughtData) {
        res.status(404).json({ message: "No thought associated with that ID. Please try again."});
        return;
      }
      User.findOneAndUpdate( { _id: params.userId }, { $pull: { thoughts: params.thoughtId }} )
      .then(() => {
          res.status(200).json({ message: `Successfully deleted the thought from User ID: ${params.userId}` });
      })
      .catch(err => res.status(500).json(err));
      })  
      .catch(err => res.status(500).json(err));
  },

  // ADD a reaction
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate( { _id: params.thoughtId }, { $addToSet: { reactions:  body }}, { new: true, runValidators: true } )
      .then(dbThoughtData => {
        if(!dbThoughtData) {
          res.status(404).json({ message: "No thought associated with that ID. Please try again." });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.status(500).json(err));
  },

  // DELETE a reaction
  deleteReaction({ params, body }, res) {
    Thought.findOneAndUpdate( { _id: params.thoughtId }, { $pull: { reactions: { reactionId: params.reactionId }}}, { new: true, runValidators: true } )
    .then(dbThoughtData => {
      if(!dbThoughtData) {
        res.status(404).json({ message: "No thought associated with that ID. Please try again." });
        return;
      }
      res.json({ message: "Successfully deleted the reaction" });
    })
    .catch(err => res.status(500).json(err));
  },
};
