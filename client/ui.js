UI = {
  setTextFeedback: function(primaryText, secondaryText, opts){
    if(!primaryText){
      Session.set("uiTextFeedback");
    }else{
      Session.set("uiTextFeedback", {
        primary: primaryText,
        secondary: secondaryText,
        type: opts.type || "alert-info"
      });
      
      Meteor.setTimeout(function(){
        UI.setTextFeedback();
      }, opts.timeout || 5000);
    }
  }
};
