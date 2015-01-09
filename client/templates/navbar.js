Template.navbar.events({
  "submit [signin-form]": function(e,tmpl){
    e.preventDefault();
    
    var username = $("#nav-signin-username").val(),
        password = $("#nav-signin-password").val();

    if(username && password){
      Meteor.loginWithPassword(username, password, function(err){
        if(err) {
          UI.setTextFeedback("Wrong user / password","Please try again", "alert-danger");
          // throw new Error(err);
        } else {
          UI.setTextFeedback("Welcome!", "",{type: "alert-success"});
          $("#nav-signing-dropdown").dropdown('toggle')
        }
      });
    } else {
      UI.setTextFeedback("Missing username or password","Please try again", "alert-danger");
      // throw new Error("No username or password provided");
    }
  },
  "click [signout-btn]": function(){
    Meteor.logout();
    UI.setTextFeedback("Signed out.", "",{type: "alert-success"});
  }
});
