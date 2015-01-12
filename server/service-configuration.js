ServiceConfiguration.configurations.remove({
  service: "github"
});

ServiceConfiguration.configurations.insert({
  service: "github",
  clientId: Meteor.settings.GITHUB_CLIENT_ID,
  secret: Meteor.settings.GITHUB_SECRET
});
