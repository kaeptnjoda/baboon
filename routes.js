Router.route("/", function(){
  this.render("homePage");
}, { name: "home" });

Router.route("/vulnerability/new", function(){
  this.render("newVulnerabilityPage");
}, { name: "newVulnerability" });

Router.route("/users/", function(){
  this.render("userProfilePage");
}, { name: "userProfile" });
