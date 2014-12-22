Template.bounties.helpers({
  bounties: function(){
    //TODO: sort by createdAt
    return Bounties.find().fetch();
  }
});
