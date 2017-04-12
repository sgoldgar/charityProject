console.log('all ready');


$(function() {
   console.log( "test!");

});

//JS for search buttons
  $('.group-btns .btn').on('click',function(event){
   event.preventDefault();

   var self = $(this);

   if ( self.find(':checkbox').length > 0 )
   {
     console.log('btn clicked: ', self.find(':checkbox').length);
     //alert('checkbox clicked');

     if ( self.hasClass('selectit' ) )
     {
       console.log('has class: selectit');
       self.removeClass('selectit');
       self.addClass('btn-primary');
     }
     else
     {
       self.addClass('selectit');
       self.removeClass('btn-primary');

     }

     console.log(self);
     return;
   }


 if ( self.find(':radio').length > 0 )
 {
   //alert('radiobutton clicked');

   // CHANGE SELECTED ITEM TO GREEN

   self.siblings("label").addBack().each(function(index, value){
     $(this).removeClass("selectit");
     $(this).addClass("btn-primary");
   });

   //alert($(this).text());
   self.removeClass("btn-primary");
   self.addClass("selectit");

   return;
 }
});

// submitting button search parameters
$(".submitSearch").on('click', function(){
// event.preventDefault();
// var needSearch = [] ;
needSearch = "";
//  var myobj = JSON.parse('{ "hello":"world" }');
// alert(myobj.hello); // 'world'
$.each($(".selectit"), function(){

      //var myobj = JSON.parse('{ "addobject":"'+$(this).text()+'" }');
      //needSearch.push(myobj.addobject);

      if (needSearch == ""){
         needSearch = $(this).text()
      }else {
         needSearch = needSearch + "," + $(this).text();
      }

      console.log('need search', needSearch)

  });
  console.log('needSearch ', needSearch);
  findNeeds(needSearch);

});

 //ajax call to match needs to database

function findNeeds(needs){
 var url = 'http://localhost:3000/charityportal/needs';
 console.log('inside findneeds');
   data = {
     needs
   };

 var patching = $.ajax({
   url:url,
   type:"POST",
   data: data
 }, console.log("data", data));

 patching.done(function(response){
   console.log("findneedsYATA ", response);

  //  *SET BACKGROUND TO WHITE*/

   //loop through array of responses to query and append onto page
   for (var j=0; j<response.length; j++){
     var allCharities = [];
     console.log(allCharities);
     allCharities.push(response[j].name); //add charity to charities array
     console.log(response[j].name);
     /*Check to see if charity matches one already returned in results*/
     for (var k = 0; k < allCharities.length; k++) {
            console.log(allCharities[k]);
       /*If it matches move on*/
       if (response[j].name === allCharities[k] && response[j].name != allCharities[0]){
         console.log('skipping this charity', response[j].name, allCharities[k]);
         continue
       }
       /*Otherwise add it to search results*/
       else {
         $('.search-results-container').append(  //need to add search-results-container to HTML
           '<div class="result-container">' + //make a div to contain a single result
             /*APPEND CHARITY NAME AND EMAIL ICON*/
             '<h3 class="inner-title">' + response[j].name +'<span class="email-icon"><img class="icon email-icon" src="assets/Mail Icon-14.png" alt="email icon"> </h3>' +
             /*APPEND CHAIRITY LOGO*/
             '<div class="col-md-4 col-sm-4 col-xs-4">' +
               '<img class="charity-logo" src="' + response[j].img +'" alt="' + response[j].name + ' logo">' +
             '</div>' +
             /*APPEND CHARITY INFO*/
             '<div class="col-md-8 col-sm-8 col-xs-8">' +
                /*APPEND CHARITY HOURS*/
               '<div class="hours">' +
                 '<p>Hours:</p>' +
                 '<p>'+ response[j].hours + '</p>' +
               '</div>' +
             /*APPEND CHARITY ADDRESS*/
               '<div class="address">' +
                 '<p>Address:</p>' +
                 '<p>' + response[j].streetAddress + ', '+ response[j].city + ', ' + response[j].state + ', ' + response[j].zip + '</p>' +
               '</div>' +
             /*APPEND NEEDS*/
               '<div class="needs-text">' +
                  '<h4> Needs </h4>' +
                 '<ul class="needs">' +
                 '</ul>' +
           /*END CONTAINER*/
           '</div>'
           );

         //find the ul called needs text created in previous loop and append list items with needs
         for(var i=0; i<response[j].needs.length; i++){ //not sure if response.needs.length is correct call
           $(".needs-text").append(
             '<li>' + response[j].needs[i] + '</li>'
           );
         }; //end ul for loop
       }; //end else statement
     }; //end charity for loop
   }; //end response for loop
 }); //end charitySearchResults.done

};
