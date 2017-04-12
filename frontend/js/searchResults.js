$(document).ready(function(){

  //AJAX STUFF MISSING

  function charitySearchResults(){
      var getCharityResults = $.ajax({
      //   url : apiUrl + "forecast",
      //   method : 'GET',
      //   dataType : 'json',
      //   data : {
      //     charityName : 'city',
      //     appid : apiKey,
      //     units : 'imperial', //convert to farenheit
      //   }
      });

      getCharityResults.done(function(response){

        //loop through array of responses to query and append onto page
        for (var j=0; j<response.length; j++){

        $('.search-results-container').append(  //need to add search-results-container to HTML
          '<div class="result-container">' + //make a div to contain a single result
            /*APPEND CHARITY NAME*/
            '<h3 class="inner-title">' + /*var name of charity*/ +'</h3>' +
            /*APPEND CHAIRITY LOGO*/
            '<div class="col-md-4 col-sm-4 col-xs-4">' +
              '<img class="charity-logo" src="' + /*var name of charity logo*/ +'" alt="' + /*charity name*/ + ' logo">' +
            '</div>' +
            /*APPEND CHARITY HOURS*/
            '<div class="col-md-4 col-sm-4 col-xs-4">' +
              '<div class="hours">' +
                '<p>Hours:</p>' +
                '<p>'+ /*var charity hours*/ + '</p>' +
              '</div>' +
            /*APPEND CHARITY ADDRESS*/
              '<div class="address">' +
                '<p>Address:</p>' +
                '<p>' + /*var for charity address + city + state + zip */ + '</p>' +
              '</div>' +
            /*APPEND NEEDS*/
              '<div class="needs-text">' +
                '<ul class="needs">' +
                '</ul>' +
            /*APPEND EMAIL BUTTON*/
            '<div class="col-md-4 col-sm-4 col-xs-4">' +
              '<button class="contact-button" id="contactUs">' +
                '<img class="icon email-icon" src="assets/Mail Icon-14.png" alt="email icon">' +
              '</button>' +
            '</div>' +
          /*END CONTAINER*/
          '</div>'
      });

      //find the ul called needs text created in previous loop and append list items with needs
      for(var i=0; i<response.needs.length; i++){ //not sure if response.needs.length is correct call
        $(".needs-text").append(
          '<li>' + response.needs[i] + '</li>'
        );
      };

      getCharityResults.fail(function(error){
        console.log('fail', error);
      });
      //.always will always fire
      getCharityResults.always(function(){
        console.log('ajax working')
      })

    }

//end document.ready
)};
