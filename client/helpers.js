_.each({
  isAdmin: function(u){
    var user = u || Meteor.user();

    return user && _.contains(user.roles, "admin");
  },
  badgeImage: function(id){
    return Badges.findOne(id).imageUrl;
  },
  avatarUrlFor: function(user){
    return (user.profile || {}).avatarUrl || "/images/timthumb.png";
  },
  submissionAllowed: function(){
    return Meteor.userId() && (Vulnerabilities.find({
      user: Meteor.userId(),
      accepted: false
    }).count() < (Meteor.settings.public.MAX_PENDING_SUBMISSIONS || 10));    
  }
}, function(fn, name){
  Template.registerHelper(name, fn);
});


