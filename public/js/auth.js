$(document).ready(function(){
    $('#login-button').removeAttr('disabled');
    $('#register-button').removeAttr('disabled');
    //Login     
    $("#LoginForm").submit(function (e) {
        $('#login-button').html('<i class="fa fa-circle-o-notch fa-spin"></i> Logging in...');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })
        e.preventDefault(); 
        var FORM_DATA = {
            name: $('#name').val(),
            password: $('#password').val(),
        }
        var POST_URL = "/ServiceLogin";
        $.ajax({
            type: "POST",
            url: POST_URL,
            data: FORM_DATA,
            dataType: 'json',
            success: function (response) {
                data = jQuery.parseJSON(JSON.stringify(response));
                if(data.status == 'fail') {
                    $('#login-button').html('LOGIN');
                    $("#error").text(data.message);
                    $("#error").show();
                }
                else if(data.status == 'success') {
                    $('#login-button').attr('disabled', 'true');
                    setTimeout(function(){ 
                        window.location.href = '/'+data.message+'/home';
                    }, 1000);
                }
                else {
                    $('#login-button').html('LOGIN');
                    $("#error").text("Something went Wrong !");
                    $("error").show();
                }
            },
            error: function (data) {
                $('#login-button').html('LOGIN');
                $("#error").text("Something went Wrong !");
                $("error").show();
            }
        });
    });

//Register

   $("#RegisterForm").submit(function (e) {
        $('#register-button').html('<i class="fa fa-circle-o-notch fa-spin"></i> Registering...');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })
        e.preventDefault(); 
        var FORM_DATA = {
            name: $('#name-register').val(),
            email: $('#email-register').val(),
            password: $('#password-register').val(),
        }
        var POST_URL = "/ServiceRegister";
        $.ajax({
            type: "POST",
            url: POST_URL,
            data: FORM_DATA,
            dataType: 'json',
            success: function (response) {
                data = jQuery.parseJSON(JSON.stringify(response));
                if(data.status == 'fail') {
                    $('#register-button').html('Register');
                    $("#error1").text(data.message);
                    $("#success").hide();
                    $("#error1").show();
                }
                else if(data.status == 'success') {
                    $('#register-button').html('Register');
                    $("#success").text(data.message);
                    $("#error1").hide();
                    $("#success").show();
                }
                else {
                    $('#register-button').html('Register');
                    $("#error1").text("Something went Wrong !");
                    $("#success").hide();
                    $("#error1").show();
                }
            },
            error: function (data) {
                $('#register-button').html('Register');
                $("#error1").text("Something went Wrong !");
                $("#success").hide();
                $("error1").show();
            }
        });
    });

});