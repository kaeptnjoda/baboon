// collection helpers

Collections = {
  create: function(name, schema, opt){
    opt = opt || {
      autoPublish: true
    };

    var collection =  new Mongo.Collection(name);
    
    collection.attachSchema(new SimpleSchema(schema));

    if(opt.autoPublish){
      if(Meteor.isServer){
        Meteor.publish(name, function(){
          return collection.find();
        });
      }else{
        Meteor.subscribe(name);
      }
    }

    return collection;
  }
};
