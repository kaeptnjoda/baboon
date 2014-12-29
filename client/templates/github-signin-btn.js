Template.githubSigninBtn.events({
  "click button": function(){
    Meteor.loginWithGithub({
      requestPermissions: ["user", "user:email"]
    }, function(err){
      if(err){
        console.error("TODO: UI error feedback", err);
      }
    });
  }
});
