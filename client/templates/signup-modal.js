Template.signupModal.events({
  "submit form": function(e, tmpl){
    e.preventDefault();
    
    var email = tmpl.$("[name=email]").val(),
        password = tmpl.$("[name=password]").val();
    //TODO: validation

    Accounts.createUser({
      username: email,
      password: password,
      email: email
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
