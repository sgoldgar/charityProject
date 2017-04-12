console.log('all ready');


$(function() {
    console.log( "test!");

});

// submitting form for profile
$(".donate").on('click', function(){
  // event.preventDefault();

  });


// ajax call to database to show saved charity profile info
  function findCharity(needs) {

    var url= 'http:localhost:3000/charity_profile/profile';
    console.log('url', url);
    data = {
      needs: needs
    };

    var completeProfile = $.ajax({
      url: url,
      type: "GET",
      data: data
    }, console.log('url', url));

    completeProfile.done(function(response){
      console.log('find needs', response);
    });


  };
