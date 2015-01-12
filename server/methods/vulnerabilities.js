Meteor.methods({
  submitVulnerability: function(doc, update, id){
    if(!this.userId) throw new Meteor.Error("The user must be signed in to submit vulnerabilities");

    if(id){
      //TODO: updates      
    }else{
      var max = ((Meteor.settings || {}).public || {}).MAX_PENDING_SUBMISSIONS || 10;
      
      if(Vulnerabilities.find({user: this.userId, accepted: false}).count() >= max){
        throw new Meteor.Error("max-submissions","Maximum number of pending submissions reached");
      }
      
      return Vulnerabilities.insert(_.extend(doc, {
        user: this.userId,
        createdAt: new Date()
      }));
    }
  }
});
