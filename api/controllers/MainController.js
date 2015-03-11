/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        if (req.session.user) {
            List.find({ where: { user: req.session.user.email }}, function (err, lists) {
                if (err) {
                    res.send(500, { error: "Database error." });
                }
            });
        }
        else {
            var lists = [];
        }
        return res.view('main/index', {
            user: req.session.user,
            lists: lists
        });
    },

    login: function (req, res) {
        if (req.method == "POST") {
            var email = req.param("email");
            var password = req.param("password");

            User.findOneByEmail(email, function (err, usr) {
                if (err) {
                    res.send(500, { error: "Database error." });
                } else {
                    if (usr) {
                        var hasher = require("password-hash");
                        if (hasher.verify(password, usr.password)) {
                            req.session.user = usr;
                            req.session.authenticated = true;
                            res.redirect(307, '/');
                        }
                        else {
                            res.send(400, { error: "Email / password combination is not correct." });
                        }
                    }
                }
            });
        }
        else {
            res.view();
        }
    },

    signup: function (req, res) {
        res.view('main/signup');
    }
}
