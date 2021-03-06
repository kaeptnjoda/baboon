AutoForm.hooks({
  submitVulnerabilityForm: {
    after: {
      submitVulnerability: function(err, res){
        if(err){
          UI.setTextFeedback("Error","Vulnerability submission failed", "alert-danger");
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
