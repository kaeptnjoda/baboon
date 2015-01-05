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
      Session.set("signupFeedback", "Please enter email.");
      return
    }

    if (password === "") {
      Session.set("signupFeedback", "Please enter password.");
      return
    }

    if (password !== passwordConfirm) {
      Session.set("signupFeedback", "Passwords do not match.");
      return
    }
    Accounts.createUser({
      username: username,
      password: password,
      email: email
    }, function(err){
      if (err) {
        if (err.reason !== "Login forbidden") {
          console.log(err);
          Session.set("signupFeedback", "Error. Please try again.");
        } else {
          clearModal();
        }
      } else {
        // TODO: display some nice feedback when signup succeeds
        clearModal();
      }
    });
  }
});

Template.signupModal.helpers({
  signupFeedback: function () {
    return Session.get("signupFeedback");
  }
});

function clearModal() {
  $("#signup-modal").modal("hide");
  $("#signup-email").val("")
  $("#signup-username").val("")
  $("#signup-password").val("")
  $("#signup-password-confirm").val("")
  Session.set("signupFeedback", "");
}
