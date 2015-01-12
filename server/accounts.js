Accounts.config({sendVerificationEmail: true});

Accounts.validateLoginAttempt(function(opt){
  if(opt.type == "password"){
    if (!opt.user) {
      return false;
    } else {
      return opt.user.emails[0].verified;
    }
  }else{
    return true;
  }
});

Accounts.onCreateUser(function(options,user){
  var ghAccessToken = ((user.services || {}).github || {}).accessToken;

  if(ghAccessToken){
    //TODO: grab more profile
    var httpOpt = {
      headers: {"User-Agent": "Meteor/1.0"},
      params: {
        access_token: ghAccessToken
      }
    };
    
    var result = Meteor.http.get("https://api.github.com/user", httpOpt);
    var email = _.findWhere(Meteor.http.get("https://api.github.com/user/emails", httpOpt).data,
                            {primary: true}).email;

    if (result.error) throw result.error;

    _.extend(user, {
      emails: email ? [{address: email, verified: true}] : [],
      username: result.data.login,
      profile: {
        name: result.data.name,
        avatarUrl: result.data.avatar_url,
        githubUrl: result.data.html_url
      }
    });

  }

  return user;
});
