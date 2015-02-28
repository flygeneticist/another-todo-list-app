$(document).ready(function () {
    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 7
            }
        }
    });
});

$("#loginButton").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    if (email && password) {
        $.post(
            '/login',
            {email: email, password:password},
            function () {
                window.location = "/";
            }
        ).fail(function (res) {
            alert("Error: " + res.getResponseHeader("error"));
        });
    } else {
        alert("An email and password are required.");
    }
});
