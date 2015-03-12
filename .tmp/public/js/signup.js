$(document).ready(function () {
    $("#signupForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 7
            },
            passwordConfirm: {
                required: true,
                minlength: 7
            }
        }
    });
});
