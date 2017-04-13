
    
$(function(){


    function sendmsg(usr, msg){
        var url = 'http://localhost:3000/chat';

        var data = {
            usr:usr,
            msg:msg
        };

        var new_message = $.ajax({
                            type:"POST",
                            url:url,
                            data
                         });

        new_message.done(function(response){
            console.log("first!");
            console.log("postmsgYATA", response);
        });
    }

    function socketfunk(){

        console.log("in socketfunk");

        var socket = io('http://localhost:8080');
        socket.on('posts', function (data) {
            console.log("socketreturndata: ", data);
            //$('body').append('<p> usr: '+data.usr+' msg: '+data.msg+'</p>')
            
            $('.messagebox').html(' ');


            for (var i=data.length-11;i<data.length;i++){
                 $(".messagebox").append('<p> usr: '+data[i].usr+' msg: '+data[i].msg+'</p>')
            }

            // data.forEach(function(dot){
            //     $(".msgs").append('<p> usr: '+dot.usr+' msg: '+dot.msg+'</p>')
            // })

        });
      
    }


    function main(){

        socketfunk();

        $(".messageenter").keyup(function(event){
             if(event.keyCode == 13){

                    var usr = localStorage.getItem('username');
                    var msg = $('.messageenter').val();
                    $('.messageenter').val("");
                    console.log('usr ', usr, ' msg ', msg);
                    sendmsg(usr, msg);

             }
        });

    }
    main();

 });

