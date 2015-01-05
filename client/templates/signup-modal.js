Template.signupModal.events({
  "submit form": function(e, tmpl){
    e.preventDefault();
    
    var email = tmpl.$("[name=email]").val(),
    password = tmpl.$("[name=password]").val(),
    passwordConfirm = tmpl.$("[name=password-confirm]").val(),
    username = tmpl.$("[name=username]").val();
    
    if (username === "") {
      username = email;
    }

    if (email === "") {
      updateModalLabel("Please enter email.");
      return
    }

    if (password === "") {
      updateModalLabel("Please enter password.");
      return
    }

    if (password !== passwordConfirm) {
      updateModalLabel("Passwords do not match.");
      return
    }
    Accounts.createUser({
      username: username,
      password: password,
      email: email
    }, function(err){
      if(err){
        Session.set("signupError", err);
        updateModalLabel("Error. Please try again.");
        // TODO: integrate with feedback object
        return
      }else{
        Session.set("signupError");
        updateModalLabel("Error. Please try again.");
        // TODO: integrate with feedback object
        return
      }
    });
    // TODO: display some nice feedback when signup succeeds
    $("#signup-modal").modal("hide");
  }
});

function updateModalLabel(s) {
  $("#signup-feedback").empty();
  $("#signup-feedback").append(s);
  return
}
