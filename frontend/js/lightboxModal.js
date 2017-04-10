// apply this modal for your lightboxes
// append a link to lightbox css in page <link rel="stylesheet" href="css/lightbox.css">

console.log('lightboxModal integrated')

$(document).ready(function(){

	$('.dropButton').hide();

	$('#sign-in').click(function(){
		$('#loginPopup').modal('show')
	});

		// there will be more to this when ajax call introduced
	$('#signUp').click(function(e){
		e.preventDefault();
		$('#loginPopup').modal('hide');
		$('#sign-in').hide();
		$('.dropButton').show();
	});

	$('.close').click(function(e){
		e.preventDefault();
		$('#loginPopup').modal('hide');
	});



});