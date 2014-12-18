Template.navbar.events({
  "submit [signin-form]": function(e,tmpl){
    e.preventDefault();
    
    var username = $("#nav-signin-username").val(),
        password = $("#nav-signin-password").val();

    if(username && password){
      Meteor.loginWithPassword(username, password);
    }
  },
  "click [signout-btn]": function(){
    Meteor.logout();
  }
});
