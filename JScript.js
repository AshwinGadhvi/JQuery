//wait for the dom to be ready

$(function() {
    //initilize form validation ont the reg form
    //it has the name attribute "registration"
    $("form[name='registration']").validate({
        //specify validation rules

        rules: {
            username: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },

        //specify validation error messages
        messages: {
            username: "Please Enter Your FirstName",
            lastName: "Please Enter Your Last Name",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be atleast 5 characters long"
            },
            email: "Please Enter an Valid Email"
        },

        //make sure the form is sumitted to the destination defined
        //in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});