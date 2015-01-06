Router.route("/", function(){
  this.render("homePage");
}, { name: "home" });

Router.route("/vulnerability/new", function(){
  this.render("new-vulnerability-page");
}, { name: "newVulnerability" });
