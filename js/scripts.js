$(document).ready(function() {
  console.log('Ready to begin the test...');


  //Brenda
  var student={
    "name": "Brenda",
    "age":20,
    "likescoding": "Yes",
  }

  if (student.likescoding == "Yes") {
    console.log(student.name + ' is ' + student.age + ' years old. ' + student.likescoding + ', she loves to code.');
  }

  $.ajax({
    type: 'GET',
    url: 'https://api.myjson.com/bins/13orzw',
    success: function(data){
      // Console log the data and examine it
      console.log(data);

      // Pass the data to a function
      buildContent(data);
    },
    error: function(error) {
      console.log(error);
    }
  })


  function buildContent(data){
    for (i = 0; i < data.length; i++){
      console.log(data[i].Origin);
      console.log(data[i].Value);
      $(".cards").append("<div class='cards'>" + data[i].Origin + "<br>" + data[i].Value + "</div>")
    }
  }
















});
