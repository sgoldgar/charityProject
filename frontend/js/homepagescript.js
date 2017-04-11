$(function(){

	console.log("sanity check");

    function logincheck(username, password){
		
		var url = 'http://localhost:3000/login/';

		var data = {
				username: username,
				password: password
			};

		var pushlogin = $.ajax({
							type:"POST",
							url:url,
							data
						 });

		pushlogin.done(function(response){
			console.log("loginYATA", response.goto);
			if (response.goto==="passwordsdontmatch"){
				alert("password or username is not correct");
			}else{
				//what page do i redirect to here?
			}
		});

	}


    function pushcharityinfo(){
    	var url = 'http://localhost:3000/login/signup/charitypost';

    	//var username = $(".charityemail").val();
    	//var password = $(".charitypassword").val();
    	//var def = $.Deferred();

    	var name = $(".charityorginizationname").val();
    	var address = $(".charityaddress").val();

    	console.log(" name ", name, " address ", address);

    	var data2 = {
    		name: name,
    		address: address
    	};

    	var pushcharity = $.ajax({
    		type:"POST",
    		url:url,
    		data: data2
    	},
   		console.log(data2));

    	pushcharity.done(function(response){
    		console.log("charitypatchYATA ", response);
    	});
    }


	function signup(username, password, type){
		var url = 'http://localhost:3000/login/signup';

		var data = {
				username: username,
				password: password,
				type: type
			};

		var pushsignup = $.ajax({
							type:"POST",
							url:url,
							data:data
						 });

		pushsignup.done(function(response){
			console.log("signupYATA", response);
			if (response.status==='ok' && type==="charity"){
				alert('user succesfully added to the db');
				pushcharityinfo();	
			}
			if (response.status==='reject'){
				alert('username already taken, please choose another');
			}

		});
	}

	$("#USERlogin").submit(function(){

			//NOTE: can't add passwords to database manually and check - the passwords need to be hashed to be properly searched!

			if (($(".USERusernamesignin").val() != "") && ($(".USERpasswordsignin").val() != "")){
				console.log("USERusernamesignin ", $(".USERusernamesignin").val());
				console.log("USERpasswordsignin ", $(".USERpasswordsignin").val());
				logincheck($(".USERusernamesignin").val(), $(".USERpasswordsignin").val());
			}
		return false;
	});


	$("#charitysignup").on("submit", function(e){
		e.preventDefault();
			if($(".charitypassword").val()===$(".charityconfirmpassword").val() && $(".charityemail").val()!="" && $(".charitypassword").val()!=""){
				signup($(".charityemail").val(), $(".charitypassword").val(), "charity");
			}
	})	

})