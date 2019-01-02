
// Create a map object

var submit_btn = d3.select("#submit_btn1");
var feedbackTable = d3.select("tbody");

// logic to handle onClick event on "Search" button
submit_btn.on("click", function() {

  console.log("Onclick Event on Submit Button: Begin");
  //preventing refresh


  var searchElement = "";
  var searchKeyword = "";

  searchElement = d3.select("#email");
  email_id = searchElement.property("value").trim();
  if (email_id != ""){
    console.log(`Email is ${email_id}`);
    searchElement = d3.select("#feedback");
    feedback = searchElement.property("value").trim();
    if (feedback != ""){
    console.log(`Feedback is ${feedback}`);
    submitFeedback(email_id,feedback);
     }
    // feedbackTable.selectAll("tr").remove();
  }

  // searchElement = d3.select("#feedback");
  // feedback = searchElement.property("value").trim();
  // if (feedback != ""){
  //   console.log(`Feedback is ${feedback}`);
  // }

  // submitFeedback(email_id,feedback);

  console.log("Onclick Event on Search Button: End");
});

/*
@author - Saifee Dalal
@Name - submitFeedback
@Input - keyword
@Output - JSON Response from Mongo
@Description - This function will call the flask route to connect to MongoDB to submit feedback
*/
function submitFeedback(email_id,feedback){

  console.log("Inside submitFeedback(): Begin");
  // d3.event.preventDefault();
  var url = "/submitFeedback/"+email_id+"/"+feedback;
  // $('#result_placeholder').html('<span><h4><b>Thanks for submitting your feedback<b></h4></span>');

  console.log("URL", url);
  d3.json(url,function(data) {
    console.log("Returned Response", data);
   
    // if (data != null && data.length > 0){
      
    //   //document.getElementById("tablehead").classList.remove('invisible');
    //   d3.select("#tablehead")
    //     .classed("invisible", false); 

    // }

    // else
    // // $('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+alert_message_result+'</span></div>');
    // console.log("Returned Response is null");

  });


};
