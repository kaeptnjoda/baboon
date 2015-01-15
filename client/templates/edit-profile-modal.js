Template.editProfileModal.events({
   "submit form": function(e, tmpl){
      e.preventDefault();
      var email = tmpl.$("[name=email]").val(),
      //password = tmpl.$("[name=password]").val(),
      //passwordConfirm = tmpl.$("[name=password-confirm]").val(),
      username = tmpl.$("[name=username]").val();

      //TODO: This doesn't work, says access denied. 
      Meteor.users.update({_id:Meteor.user()._id}, {$set:{"username":username}})


      clearModal();
   }
});

Template.editProfileModal.helpers({
  signupFeedback: function () {
    return Session.get("editProfile");
  },
  email: function(){
    var email,
    emails = Meteor.user().emails;
    
    if(Array.isArray(emails)){
      var email = [0].address;
    }
    return email;
  }
});

function clearModal() {
  $("#edit-profile-modal").modal("hide");
  $("#edit-profile-email").val("")
  $("#edit-profile-username").val("")
  $("#edit-profile-password").val("")
  $("#edit-profile-password-confirm").val("")
  Session.set("editProfile", "");
}
