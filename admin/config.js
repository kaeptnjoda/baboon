AdminConfig = {
  name: "Baboon",
  adminEmails: ["konstantin@ethdev.com", "bob@bob.com", "gustav@ethdev.com", "konstantin.k.ed@gmail.com"],
  dashboard: {
    skin: "blue"
  },
  collections: {
    Users: {},
    Badges: {},
    Vulnerabilities: {
      tableColumns: [{
        label: "Date",
        name: "createdAt"
      }, {
        label: "Accepted",
        name: "accepted"
      },{
        label: "User",
        name: "user",
        collection: "Users"
      }, {
        label: "Title",
        name: "title"
      }]
    }
  }
};
