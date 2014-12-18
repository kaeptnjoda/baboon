//TODO: see if this chains

(Badges = new Mongo.Collection("badges")).attachSchema(new SimpleSchema({
  imageUrl: {
    type: String,
    label: "url"
  },
  name: {
    type: String,
    label: "name"
  }
}));

