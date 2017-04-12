// apply this modal for your lightboxes
// append a link to lightbox css in page <link rel="stylesheet" href="css/lightbox.css">

console.log('lightboxModal integrated')

$(document).ready(function(){

	$('.dropButton').hide();

	$('#sign-in').click(function(){
		$('#logInPopup').modal('show');
	});

	$('#sign-up').click(function(){
		$('#signUpPopup').modal('show');
	});

	$('.join').click(function(){
		$('#joinUpPopup').modal('show');
	});

	$('#contactUs').click(function(){
		$('#contactPopup').modal('show');
	});

	$('#donate').click(function () {
		$('#donatePopup').modal('show')
	});

		// there will be more to this when ajax call introduced

	$('.logIn').click(function(e){
		e.preventDefault();
		$('#logInPopup').modal('hide');
		// $('#sign-in').hide();
		// $('.dropButton').show();
		window.location.href='charityProfile.html';
	});

	$('#signUp').click(function(e){
		e.preventDefault();
		$('#signUpPopup').modal('hide');
		// $('#sign-in').hide();
		// $('.dropButton').show();
		window.location.href='profileEdit.html';
	});

	$('#joinUp').click(function(e){
		e.preventDefault();
		$('#joinUpPopup').modal('hide');
		// $('#sign-in').hide();
		// $('.dropButton').show();
		window.location.href='donorProfile.html';
	});

	$('.close').click(function(e){
		e.preventDefault();
		$('#signUpPopup').modal('hide');
		$('#logInPopup').modal('hide');

		$('#donatePopup').modal('hide');

		$('#joinUpPopup').modal('hide');
		$('#contactPopup').modal('hide');

	});

function personalizeProfile(profile){
    
    var url = 'http://localhost:3000/donator_routes';
    var data = {
     name: name,
     // img: img
   };

    var personalize = $.ajax({
   type: 'GET',
   url: url,
   data: data
    });

    personalize.done(function(response){
        console.log('response: ', response);


     });
    }

    personalizeProfile();

});
