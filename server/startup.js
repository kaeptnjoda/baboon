Meteor.startup(function(){
  process.env.MAIL_URL = 'smtp://' +
    encodeURIComponent(Meteor.settings.smtp_username) + ':' +
    encodeURIComponent(Meteor.settings.smtp_password) + '@' +
    encodeURIComponent(Meteor.settings.smtp_host) + ':' +
    Meteor.settings.smtp_port;
  console.log(process.env.MAIL_URL);

  Accounts.emailTemplates.from = 'Ethereum Bounty Program <bounties@ethdev.com>';
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm your email address for Ethereum Bounty Program';
  };
});
