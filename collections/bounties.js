Bounties = Collections.create("bounties", {
  ethId: {
    type: String,
    label: "Ethereum security ID"
  },
  title: {
    type: String
  },
  description: {
    type: String,
    autoform: {
      afFieldInput: {
        rows: 6
      }
    }
  },
  score: {
    type: Number,
    defaultValue: 0
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
    })]
  }
});
