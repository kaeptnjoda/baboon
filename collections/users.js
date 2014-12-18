Meteor.users.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  badges: {
    type: [String]
  }
}));
