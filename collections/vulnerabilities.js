Vulnerabilities = Collections.create("vulnerabilities", {
  user: {
    type: String,
    optional: true
  },
  accepted: { //maybe better to have acceptedAt type: Date ?
    type: Boolean, 
    defaultValue: false
  },
  title: {
    type: String,
    max: 100
  },
  description: {
    type: String,
    autoform: {
      afFieldInput: {
        rows: 6
      }
    }
  },
  ethId: {
    type: String,
    label: "Ethereum security ID",
    optional: true
  },
  score: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  valueUsd: {
    type: Number,
    optional: true
  },
  badges: {
    type: [new SimpleSchema({
      //TODO: DRY
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
      }
    })],
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  }
}, {autoPublish: false});

if(Meteor.isServer){
  Meteor.publish("vulnerabilities", function(){
    return Vulnerabilities.find({$or: [{
      accepted: true
    }, {
      user: this.userId
    }]});
  });
}else{
  Meteor.subscribe("vulnerabilities");
}
