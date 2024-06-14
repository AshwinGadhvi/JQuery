$(document).ready(function() {

    $("#usercheck").hide();
    let usernameError = true;
    let passwordError = true;
    let cpasswordError = true;
    $("#username").keyup(function() {

        validateUsername();

    });

    function validateUsername() {
        let usernameValue = $("#username").val();
        if (usernameValue.length == '') {
            usernameError = false;
            return false;
        } else if ((usernameValue.length < 3) || (usernameValue.length > 10)) {
            $("#usercheck").show();
            $("#usercheck").html("**length of the username should be between 3 to 10");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
        }
    }


    const email = document.getElementById('email');
    email.addEventListener('blur', () => {
        let regex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove('is-invalid');
            emailError = true;
        } else {
            email.classList.add('is-invalid');
            emailError = false;
        }
    })


    const passcheck = $("#passcheck");
    $("#password").keyup(function() {
        validatepassword();
    })

    function validatepassword() {

        const pass = $('#password').val();
        if (pass.length = 0) {
            passwordError = false;
            return false;
        } else if (pass.length < 8) {
            $('#passcheck').html("Enter password greater than 8 characters");
            $('#passcheck').show();

        } else {
            $('#passcheck').hide();
        }
    }

    const cpasscheck = $("#cpasscheck");
    $("#cpassword").keyup(function() {
        validatecpassword();
    })

    function validatecpassword() {

        const pass = $("#password").val();
        const cpass = $("#cpassword").val();
        if (cpass.length = 0) {
            cpasswordError = false;
            return false;
        } else if (pass.length != cpass.length) {
            $("#cpasscheck").html("Password doesn't match");
            $("#cpasscheck").show();
        } else if (pass != cpass) {
            $("#cpasscheck").html("Password doesn't match");
            $("#cpasscheck").show();
        } else {
            $("#cpasscheck").hide();
        }

    }





});