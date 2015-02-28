/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
    index: function (req, res) {
        res.view();
    },
    login: function (req, res) {
        if (req.method == "GET") {
            res.view();
        } else if (req.method == "POST" && loginUser(req)) {
            // redrect to the home page
            req.flash("message", "You have logged in successfully!")
            res.redirect(307, "main/index");
        } else {
            // return to the login page with errors
            req.flash("error", "Error logging in. Please check your email/password and try again.")
            res.view();
        }
    },
    signup: function (req, res) {
        if (req.method == "GET") {
            res.view();
        } else if (req.method == "POST" && signupUser(req)) {
            // redrect to the home page with welcome alert
            req.flash("message", "You have signed up successfully! Please check your email for a confirmation link.")
            res.redirect(307, "main/index");
        } else {
            // return to the signup page with errors
            req.flash("error", "Error signing up. Please check your email/password and try again.")
            res.view();
        }
    }
};
