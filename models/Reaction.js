// This is NOT a model, but rather is used as the reaction field's subdocument schema in the Thought model.

const { Schema, Types } = require('mongoose');
const moment = require('moment');

// Creating the Reaction schema
const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            // Setting default value to the current timestamp
            default: Date.now,
            // Using a getter method to format the timestamp on query
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
    },
    {
        toJSON: {
      // Mongoose will not include virtuals by default, so a `virtuals` property is added and it's value is set to true
      getters: true,
        },
        id: false,
      }
);

//export reactionSchema
module.exports = reactionSchema;