console.log('all ready');


$(function() {
    console.log( "test!");

});

// submitting form for profile
$(".saveProfile").on('click', function(){
  // event.preventDefault();

  });


// ajax call to database to show saved charity profile info
  function update() {

    var url= 'http:localhost:3000/charityprofile';
    console.log('url', url);
    data = {
      profileManager : profileManger,
      charityname : charityName,
      adress : streetAddress,
      email : email
    };

    var updateProfile = $.ajax({
      url: url,
      type: "GET",
      data: data
    }, console.log('url', url));

    updateProfile.done(function(response){
      console.log('find needs', response);
    });


  };
