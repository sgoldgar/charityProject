
console.log('all ready');


$(function() {
   console.log( "test!");

});

//profile drop down
function myFunction() {
    $("#myDropdown").classList.toggle("show");
}
// $('.drpbtn').hover(function(e){
//   $('#myDropdown').toggle();
// })
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
//
// $('.drpbtn').hover(function(e){
//   $('#myDropdown').toggle()
//   if (!e.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//
// }
// })

// personalize sidebar
function personalizeProfile(){

    var url = 'http://localhost:3000/donorprofile';
    var email = localStorage.getItem("username");
    console.log('email', email);
    var data = {
     	email: email
     // img: img
   };


   var personalize = $.ajax({
           type: 'POST',
           url: url,
           data: data
         }, console.log("data: ", data));


    personalize.done(function(response){
        console.log('response: ', response);
        $('.donorName').html("<p>"+response[0].name+"</p>");
     });
}


    personalizeProfile();
