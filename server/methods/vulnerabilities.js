Meteor.methods({
  submitVulnerability: function(doc, update, id){
    if(!this.userId) throw new Meteor.Error("The user must be signed in to submit vulnerabilities");

    if(id){
      //TODO: updates      
    }else{
      return Vulnerabilities.insert(_.extend(doc, {
        user: this.userId,
        createdAt: new Date()
      }));
    }
  }
});
