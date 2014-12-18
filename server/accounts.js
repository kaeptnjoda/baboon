Accounts.config({sendVerificationEmail: true});


Accounts.validateLoginAttempt(function(opt){
  return opt.user.emails[0].verified;
});
