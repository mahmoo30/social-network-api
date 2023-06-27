const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// Importing moment to utlize it to convert date/timestamp
const moment = require('moment');

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
      },
      createdAt: {
        type: Date,
            // Setting default value to the current timestamp
            default: Date.now,
            // Using a getter method to format the timestamp on query
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    // Array of nested documents created with the reactionSchema
    reactions: [reactionSchema]
  },
  { 
    toJSON: {
      // Mongoose will not include virtuals by default, so a `virtuals` property is added and it's value is set to true
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// A virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
  return `reactions: ${this.reactions.length}`;
  });

// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;