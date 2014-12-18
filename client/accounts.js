Accounts.onEmailVerificationLink(function(tok, done){
  Accounts.verifyEmail(tok, function(err){
    if(err){
      console.error(err);
    }else{
      done();
    }
  });
});
