console.log('all ready');


$(function() {
    console.log( "test!");
    var databaseUrl= 'http:localhost:3000/charity_portal';
});

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




function findneeds(needs){

  var url = 'http://localhost.com/charityportal/needs';

  console.log('inside findneeds');

  data = {
    needs: needs
  };

  var patching = $.ajax({
    url:url,
    type:"GET",
    data:data
  });

  patching.done(function(response){
    console.log("findneedsYATA ", response);
  });


}





// submitting button search parameters
$(".submitSearch").on('click', function(event){
  event.preventDefault();
  var needSearch = [] ;
  $.each($(".selectit"), function(){
        needSearch.push($(this).text());
    });
    console.log('needSearch ', needSearch);
    findneeds(needSearch);
  });
  

// // ajax call to database based on needs selected
//   function getNeedsData(needSearch) {
//     var getNeeds = $.ajax({
//     url: databaseUrl,
//     data: needSearch
//   })
//
//
//   getNeeds.done(function(response) {
//     $(this ).addClass( "done" );
//     // flag=response.sys.country;
//     // flagPic=flag.toLowercase();
//
//       console.log(city, temperature, humidity, flag)
//
//       //put API response into the DOM
//       // $('.search-results').find('.results-city').text(city).append('<img src="'+iconUrl+'"/>');
//       // $('.temperature-container .temperature').text(temperature + ' F');
//       // $('.humidity-container .humidity').text(humidity);
//       // $('.results').find('.flag-icon').prepend('<span>"flag-icon-'+ flagPic'(</span>');
//
//
//     });
//
//     getNeeds.fail(function(error){
//       alert('error!', error),
//
//     });
//
//     getNeeds.always(function(){
//
//     });
//
//
//   }
//   //setting event handlers
//   function setHandlers(){        //
//     $('.submitSearch').on('submit', function(event){
//       event.preventDefault(); //prevent default of submitting  first pull value of buttons
//
//     getNeedsData(needSearch);//call function
//     });
//
//   }
//
//   function main() {
//     //what do we want when it loads? default city w
//     getNeedData('needSearch');
//     setHandlers();
//
//   }
//   /*flow of our webapp*/
//   main();
//
//   });
// };
// });