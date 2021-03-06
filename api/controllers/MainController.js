/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        if (req.session.user) {
            List.find({where: {user: req.session.user.email}}, function (err, list) {
                if (err) {
                    res.serverError("Database error.");
                }
                res.view('main/index', {
                    user: req.session.user,
                    lists: list
                });
            });
        } else {
            var list = [];
            return res.view('main/index', {
                user: null,
                lists: list
            });
        }
    },

    login: function (req, res) {
        if (req.method == "POST") {
            var email = req.param("email");
            var password = req.param("password");
            User.findOneByEmail(email, function (err, usr) {
                if (err) {
                    res.serverError("Database error.");
                } else {
                    if (usr) {
                        var hasher = require("password-hash");
                        if (hasher.verify(password, usr.password)) {
                            req.session.user = usr;
                            req.session.authenticated = true;
                            res.redirect(307, '/');
                        }
                        else {
                            res.badRequest("Email / password combination is not correct.", 'main/login');
                        }
                    }
                }
            });
        }
        else {
            res.view();
        }
    },
    logout: function (req, res) {
        req.session.user = null;
        res.redirect(307, '/');
    },

    signup: function (req, res) {
        res.view('main/signup');
    }
}
