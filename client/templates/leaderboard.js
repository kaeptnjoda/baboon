Template.leaderboard.helpers({
  leaders: function(){
    return _.map(Meteor.users.find({}, {
      sort: {
        points: -1
      }
    }).fetch(), function(user, i){
      return {
        i: i+1,
        leader: user
      };
    });
  },
  primaryName: function(user){
    return (user.profile || {}).name || user.username;
  },
  secondaryName: function(user){
    return (user.profile || {}).name ? "@" + user.username : "";
  }
});
