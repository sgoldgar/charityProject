console.log('all ready');


$(function() {
    console.log( "test!");
});

// all of this is NOT necessary, bootstrap does it

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
