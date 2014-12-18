Template.signupModal.events({
  "click [btn-signup]": function(e, tmpl){
    var username = $("#signup-modal [name=email]").val(),
        password = $("#signup-modal [name=password]").val();
    //TODO: validation

    Accounts.createUser({
      username: username,
      password: password,
      email: username
    }, function(err){
      if(err){
        Session.set("signupError", err);
        throw new Error(err);
      }else{
        Session.set("signupError");
        $("#signup-modal").modal("hide");
      }
    });
  }
});
