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
      Session.set("signupFeedback", "Please enter email ");
      return
    }

    if (password === "") {
      Session.set("signupFeedback", "Please enter password ");
      return
    }

    if (password !== passwordConfirm) {
      Session.set("signupFeedback", "Passwords do not match ");
      return
    }
    Accounts.createUser({
      username: username,
      password: password,
      email: email
    }, function(err){
      if (err) {
        switch (err.reason) {
        case "Username already exists." :
          Session.set("signupFeedback", "Username already in use. Please choose another ");
          break;
        case "Email already exists." :
          Session.set("signupFeedback", "Email already in use. Please choose another ");
          break;
          // Assume this means successful user creation and ignore automatic
          // login attempt since user has not verified email yet.
        case "Login forbidden" :
          clearModal();
          UI.setTextFeedback("Thank you!", "Please check email to verify signup ",{
            type: "alert-success"
          });
          break;
        default:
          console.log(err);
          Session.set("signupFeedback", "Error. Please try again ");
        }
      } else {
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
