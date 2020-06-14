/*------------------------
	AJAX ADD USER MAIL
------------------------*/

//SIGN IN
$("#email_btn").click(function(e){
    var userEmail = $('#email_input').val();

    e.preventDefault();
    if (userEmail == "") {
      $('.sign-up-error').html("Email is required")
    } 
    //  if(userEmail !== ""){
    //     $.ajax({
    //     type: "POST",
    //     url: "assets/ajax_subscribe.php?login=true",
    //     data: {
    //             'user_email': userEmail,
    //           },
    //     dataType: "JSON",
    //     success: function(res){
    //                 if (res.status == 'success') {
    //                   $('.login-error').addClass('login-progress').addClass('form-group');
    //                   $('.login-error').html("");
    //                   $('.login-error').css('padding', '0');
    //                   setTimeout(function(){ 
    //                       location = res.msg;
    //                    }, 2000);

    //                 } else if(res.status == 'wrong_email'){
    //                     $('.login-error').html(res.msg);
    //                     $('.login-error').css('padding', '15px');
    //                 } else if (res.status == 'wrong_password') {
    //                     $('.login-error').html(res.msg);
    //                     $('.login-error').css('padding', '15px');
    //                 }
    //             }
    //     });
    // }
});
/*------------------
	COUNTDOWN TIMER
--------------------*/

var ramadan_date = new Date("Apr 23, 2020 12:00:00");

var date = setInterval(function(){
    //current date
    var date_now = new Date().getTime();

    //countdown distance 
    var countdown = ramadan_date - date_now;

    var c_days = Math.floor(countdown/(1000 * 60 * 60 * 24));
    var c_hours = Math.floor((countdown % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var c_minutes = Math.floor((countdown % (1000 * 60 * 60))/(1000 * 60));
    var c_seconds = Math.floor((countdown % (1000 * 60))/(1000));

    //COUNTDOWN DISPLAY
    document.getElementById("c_days").innerHTML = "&#177;" + c_days;
    document.getElementById("c_hours").innerHTML = c_hours;
    document.getElementById("c_minutes").innerHTML = c_minutes;
    document.getElementById("c_seconds").innerHTML = c_seconds;
    
    if (countdown = 0) {
        clearInterval(date);
        document.getElementById("countdown-h1").innerHTML = "RAMADAN IS HERE, ALHAMDULILLAH";
    }
}, 1000);


