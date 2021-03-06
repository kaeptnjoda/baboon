//TODO

Meteor.users.attachSchema(new SimpleSchema({
  username: {
    type: String
  },
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: new SimpleSchema({
      name: {
        type: String,
        optional: true
      },
      avatarUrl: {
        type: String,
        optional: true
      }
    }),
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  points: {
    type: Number,
    min: 0,
    defaultValue: 0
  },
  roles: {
    type: [String],
    optional: true
  },
  badges: {
    type: [new SimpleSchema({
      badge: {
        type: String,
        autoform: {
          options: function(){
            return _.map(Badges.find().fetch(), function(badge){
              return {
                label: badge.name,
                value: badge._id
              };
            });
          }
        }
      },
      count: {
        type: Number,
        min: 0,
        defaultValue: 1
      }
    })],
    defaultValue: []
  }
}));

if(Meteor.isServer){
  Meteor.publish("userData", function(){
    return Meteor.users.find({_id: this.userId});
  });
  Meteor.publish("allUserData", function(){
    return Meteor.users.find({}, {
      fields: {
        username: 1,
        badges: 1,
        points: 1,
        profile: 1
      }
    });
  });
}else{
  Meteor.subscribe("userData");
  Meteor.subscribe("allUserData");
}
