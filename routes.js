Router.route("/", function(){
  this.render("homePage");
}, { name: "home" });

Router.route("/vulnerability/new", function(){
  this.render("new-vulnerability-page");
}, { name: "newVulnerability" });

Router.route("/users/:_id", function(){
  this.render("user-profile-page", {data: Meteor.users.findOne(this.params._id)});
}, { name: "userProfile" });
