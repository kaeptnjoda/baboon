Template.profile.helpers({
  isUserProfile: function(profileid){
  	var user = Meteor.user();

  	if(user._id == profileid){
  		return true;
  	}
  	return false;
  
  }
});


