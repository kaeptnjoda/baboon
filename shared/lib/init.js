// for any app initalisation code;

Baboon = {
  collections: {},
  addCollection: function(name, schema){
    var col = this.collections[name] = new Mongo.Collection(name);

    col.attachSchema(new SimpleSchema(schema));
  }
};




