document.addEventListener("DOMContentLoaded", function() {

  // Imagination!

  var url = 'https://bb-election-api.herokuapp.com/';
  var ulTag = document.getElementById('candidates');

  var ajaxFunction = $.ajax({
                            url: url,
                            method: 'GET',
                            dataType: 'json'
                          });

  ajaxFunction.done(function(responseData){

    var candidatesArray = responseData['candidates'];

    for(i=0; i<candidatesArray.length; i++){
      var liTag = document.createElement('li');
      liTag.innerHTML = 'Name: '+ candidatesArray[i].name+"<br> Votes: "+ candidatesArray[i].votes;
      ulTag.append(liTag);
      console.log(candidatesArray[i]);
    }

  });

});
