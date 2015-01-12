AutoForm.hooks({
  submitVulnerabilityForm: {
    after: {
      submitVulnerability: function(err, res){
        if(err){
          UI.setTextFeedback("Error",err.reason || "Vulnerability submission failed",{
            type: "alert-danger"
          });
        }else{
          Router.go("/");
          UI.setTextFeedback("Thank you!", "Vulnerability has been submitted",{
            type: "alert-success"
          });
        }
      }
    }
  }
});
