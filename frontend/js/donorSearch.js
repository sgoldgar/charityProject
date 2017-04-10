console.log('all ready');


$(function() {
    console.log( "test!");
});

$('.group-btns .btn').on('click',function(event){
  event.preventDefault();

  var self = $(this);

          if ( self.find(':checkbox').length > 0 )
        {
          //alert('checkbox clicked');

          if ( self.hasClass('selectit' ) )
          {
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

// submitting button search parameters
$(".submitSearch").on('click', function(event){
  event.preventDefault();
  var needSearch = [] ;
  $.each($(".selectit"), function(){
        needSearch.push($(this).text());
    });
    console.log(needSearch);
  });
  $.ajax({
    url: "test.html",
    context: document.body
  }).done(function() {
    $( this ).addClass( "done" );
    
  });

});
