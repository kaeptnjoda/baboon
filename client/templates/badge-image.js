Template.badgeImage.helpers({
  url: function(){
    return Badges.findOne(this.toString()).imageUrl;
  }
});
