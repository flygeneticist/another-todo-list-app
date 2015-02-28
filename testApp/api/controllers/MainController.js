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
        if(req.method == "POST" && loginUser(req)) {
            // redrect to the home page
            res.view("main/index");
        } else {
            // return to the login page with errors
            res.view();
        }
    },
    signup: function (req, res) {
        if(req.method == "POST" && signupUser(req)) {
            // redrect to the home page with welcome alert
            res.view("main/index");
        } else {
            // return to the signup page with errors
            res.view();
        }
    }
};

function signupUser(req) {
    return true;
};

function loginUser(req) {
    return true;
};
