Template.registerHelper("isAdmin", function(u){
  var user = u || Meteor.user();

  return user && _.contains(user.roles, "admin");
});
