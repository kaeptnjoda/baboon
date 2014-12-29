ServiceConfiguration.configurations.remove({
  service: "github"
});

ServiceConfiguration.configurations.insert({
  service: "github",
  clientId: Meteor.settings.githubClientId,
  secret: Meteor.settings.githubSecret
});
