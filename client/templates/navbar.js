Template.navbar.events({
  "submit [signin-form]": function(e,tmpl){
    e.preventDefault();
    
    var username = $("#nav-signin-username").val(),
        password = $("#nav-signin-password").val();

    if(username && password){
      Meteor.loginWithPassword(username, password, function(err){
        if(err) throw new Error(err);
      });
    } else {
      throw new Error("No username or password provided");
    }
  },
  "click [signout-btn]": function(){
    Meteor.logout();
  }
});
