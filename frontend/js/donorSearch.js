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

  var url = 'http://localhost:3000/charityportal/needs';

  console.log('inside findneeds');

  data = {
    needs: needs
  };

  var patching = $.ajax({
    url:url,
    type:"POST",
    data: data
  }, console.log("needs data object", data.needs[0]));

  patching.done(function(response){
    console.log("findneedsYATA ", response);
  });


}



// submitting button search parameters
$(".submitSearch").on('click', function(){
  // event.preventDefault();
  var needSearch = [] ;
  $.each($(".selectit"), function(){
        needSearch.push($(this).text());

    });

    console.log('needSearch ', needSearch);
    findneeds(needSearch);
  });
  