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

function signupUser() {
    var email = $("#email").val();
    var password = $("#password").val();
    var passwordConfirm = $("#passwordConfirm").val();h

    if (email && password && passwordConfirm) {
        if (password == passwordConfirm) {
            $.post(
                '/signup',
                {email: email, password:password},
                function () {
                    window.location = "/";
                }
            ).fail(function (res) {
                alert("Error: " + res.getResponseHeader("error"));
            });
        } else {
            alert("Passwords must match.");
        }
    } else {
        alert("An email and both password fields are required.");
    }
};
