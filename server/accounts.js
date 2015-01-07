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
    var result = Meteor.http.get("https://api.github.com/user", {
      headers: {"User-Agent": "Meteor/1.0"},
      params: {
        access_token: ghAccessToken
      }
    });

    if (result.error) throw result.error;

    _.extend(user, {
      emails: result.data.email ? [{address: result.data.email, verified: true}] : [],
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
