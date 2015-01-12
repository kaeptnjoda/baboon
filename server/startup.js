Meteor.startup(function(){
  Accounts.emailTemplates.from = 'Ethereum Bounty Program <bounties@ethdev.com>';
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm your email address for Ethereum Bounty Program';
  };
});
