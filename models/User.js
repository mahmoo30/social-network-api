const { Schema, model } = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,

        // Validator for email address
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
      thoughts: [{
        // Array of _id values referencing the Thought model
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }],
      friends: [{
        // Array of _id values referencing the User model (self-reference)
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
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

// A virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
  return `friends: ${this.friends.length}`;
  });

// Initialize the User model
const User = model('User', userSchema);

// Export the User model
module.exports = User;